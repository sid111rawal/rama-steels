'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { Calculator, RotateCcw, Copy, Check } from 'lucide-react';
import { Suspense, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import {
    validateInputs,
    calculatePrice,
    formatCurrency,
    parseInputValue,
    parseIntegerValue,
    CURRENCY_SYMBOL,
    runSanityTests,
    type CalculatorInputs,
    type CalculatorResult,
    type ValidationError,
} from '@/lib/calculator-utils';

const WhatsAppChat = dynamic(() => import('@/components/whatsapp-chat'), { ssr: false });

// Expose runSanityTests to window on mount
if (typeof window !== 'undefined') {
    (window as unknown as { runSanityTests: typeof runSanityTests }).runSanityTests = runSanityTests;
}

interface FormState {
    size: string;
    quantity: string;
    ratePerMM: string;
    moq: string;
    minBillValue: string;
}

const initialFormState: FormState = {
    size: '',
    quantity: '',
    ratePerMM: '',
    moq: '1',
    minBillValue: '0',
};

export default function PriceCalculatorPage() {
    const [formData, setFormData] = useState<FormState>(initialFormState);
    const [errors, setErrors] = useState<ValidationError[]>([]);
    const [result, setResult] = useState<CalculatorResult | null>(null);
    const [inputsUsed, setInputsUsed] = useState<CalculatorInputs | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [copied, setCopied] = useState(false);

    const getFieldError = (field: keyof CalculatorInputs): string | undefined => {
        return errors.find((e) => e.field === field)?.message;
    };

    const handleInputChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (result) {
            setShowResult(false);
            setResult(null);
        }
        setErrors([]);
    };

    const handleCalculate = useCallback(() => {
        const inputs: Partial<CalculatorInputs> = {
            size: parseInputValue(formData.size),
            quantity: parseIntegerValue(formData.quantity),
            ratePerMM: parseInputValue(formData.ratePerMM),
            moq: parseIntegerValue(formData.moq),
            minBillValue: parseInputValue(formData.minBillValue),
        };

        const validationErrors = validateInputs(inputs);

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setResult(null);
            setShowResult(false);
            return;
        }

        setErrors([]);
        const calculatedResult = calculatePrice(inputs as CalculatorInputs);
        setResult(calculatedResult);
        setInputsUsed(inputs as CalculatorInputs);
        setShowResult(true);
    }, [formData]);

    const handleReset = useCallback(() => {
        setFormData(initialFormState);
        setErrors([]);
        setResult(null);
        setInputsUsed(null);
        setShowResult(false);
        setCopied(false);
    }, []);

    const handleCopy = useCallback(async () => {
        if (result) {
            try {
                await navigator.clipboard.writeText(result.finalPrice.toFixed(2));
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    }, [result]);

    const isFormValid = useCallback(() => {
        const inputs: Partial<CalculatorInputs> = {
            size: parseInputValue(formData.size),
            quantity: parseIntegerValue(formData.quantity),
            ratePerMM: parseInputValue(formData.ratePerMM),
            moq: parseIntegerValue(formData.moq),
            minBillValue: parseInputValue(formData.minBillValue),
        };
        return validateInputs(inputs).length === 0;
    }, [formData]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && isFormValid()) {
            handleCalculate();
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Suspense fallback={<div className="h-20 bg-background">Loading header...</div>}>
                <Header />
            </Suspense>
            <main className="flex-1 py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <Calculator className="h-8 w-8" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                                Price Calculator
                            </h1>
                        </div>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Calculate the total price for your steel ball order. Enter the ball size, quantity, and rate to get an instant estimate.
                        </p>
                    </div>

                    {/* Calculator Card */}
                    <Card className="max-w-2xl mx-auto shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl">Enter Values</CardTitle>
                            <CardDescription>
                                All fields are required. Prices are in {CURRENCY_SYMBOL} (Indian Rupees).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6" onKeyDown={handleKeyDown}>
                                {/* Size Input */}
                                <div className="space-y-2">
                                    <Label htmlFor="size" className="text-base font-medium">
                                        Ball Size <span className="text-muted-foreground font-normal">(diameter in mm)</span>
                                    </Label>
                                    <Input
                                        id="size"
                                        type="number"
                                        step="0.1"
                                        min="0.1"
                                        max="500"
                                        placeholder="e.g., 20"
                                        value={formData.size}
                                        onChange={handleInputChange('size')}
                                        className={getFieldError('size') ? 'border-destructive focus-visible:ring-destructive' : ''}
                                        aria-invalid={!!getFieldError('size')}
                                        aria-describedby={getFieldError('size') ? 'size-error' : undefined}
                                    />
                                    {getFieldError('size') && (
                                        <p id="size-error" className="text-sm text-destructive" role="alert">
                                            {getFieldError('size')}
                                        </p>
                                    )}
                                </div>

                                {/* Quantity Input */}
                                <div className="space-y-2">
                                    <Label htmlFor="quantity" className="text-base font-medium">
                                        Quantity <span className="text-muted-foreground font-normal">(number of balls)</span>
                                    </Label>
                                    <Input
                                        id="quantity"
                                        type="number"
                                        step="1"
                                        min="1"
                                        placeholder="e.g., 100"
                                        value={formData.quantity}
                                        onChange={handleInputChange('quantity')}
                                        className={getFieldError('quantity') ? 'border-destructive focus-visible:ring-destructive' : ''}
                                        aria-invalid={!!getFieldError('quantity')}
                                        aria-describedby={getFieldError('quantity') ? 'quantity-error' : undefined}
                                    />
                                    {getFieldError('quantity') && (
                                        <p id="quantity-error" className="text-sm text-destructive" role="alert">
                                            {getFieldError('quantity')}
                                        </p>
                                    )}
                                </div>

                                {/* Rate per MM Input */}
                                <div className="space-y-2">
                                    <Label htmlFor="ratePerMM" className="text-base font-medium">
                                        Rate per mm <span className="text-muted-foreground font-normal">({CURRENCY_SYMBOL}/mm)</span>
                                    </Label>
                                    <Input
                                        id="ratePerMM"
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        placeholder="e.g., 5"
                                        value={formData.ratePerMM}
                                        onChange={handleInputChange('ratePerMM')}
                                        className={getFieldError('ratePerMM') ? 'border-destructive focus-visible:ring-destructive' : ''}
                                        aria-invalid={!!getFieldError('ratePerMM')}
                                        aria-describedby={getFieldError('ratePerMM') ? 'rate-error' : undefined}
                                    />
                                    {getFieldError('ratePerMM') && (
                                        <p id="rate-error" className="text-sm text-destructive" role="alert">
                                            {getFieldError('ratePerMM')}
                                        </p>
                                    )}
                                </div>

                                {/* MOQ and MinBillValue Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="moq" className="text-base font-medium">
                                            MOQ <span className="text-muted-foreground font-normal">(minimum order)</span>
                                        </Label>
                                        <Input
                                            id="moq"
                                            type="number"
                                            step="1"
                                            min="0"
                                            placeholder="e.g., 10"
                                            value={formData.moq}
                                            onChange={handleInputChange('moq')}
                                            className={getFieldError('moq') ? 'border-destructive focus-visible:ring-destructive' : ''}
                                            aria-invalid={!!getFieldError('moq')}
                                            aria-describedby={getFieldError('moq') ? 'moq-error' : undefined}
                                        />
                                        {getFieldError('moq') && (
                                            <p id="moq-error" className="text-sm text-destructive" role="alert">
                                                {getFieldError('moq')}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="minBillValue" className="text-base font-medium">
                                            Min Bill Value <span className="text-muted-foreground font-normal">({CURRENCY_SYMBOL})</span>
                                        </Label>
                                        <Input
                                            id="minBillValue"
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            placeholder="e.g., 1000"
                                            value={formData.minBillValue}
                                            onChange={handleInputChange('minBillValue')}
                                            className={getFieldError('minBillValue') ? 'border-destructive focus-visible:ring-destructive' : ''}
                                            aria-invalid={!!getFieldError('minBillValue')}
                                            aria-describedby={getFieldError('minBillValue') ? 'minbill-error' : undefined}
                                        />
                                        {getFieldError('minBillValue') && (
                                            <p id="minbill-error" className="text-sm text-destructive" role="alert">
                                                {getFieldError('minBillValue')}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <Button
                                        onClick={handleCalculate}
                                        className="flex-1 text-lg py-6"
                                        size="lg"
                                    >
                                        <Calculator className="mr-2 h-5 w-5" />
                                        Calculate
                                    </Button>
                                    <Button
                                        onClick={handleReset}
                                        variant="outline"
                                        size="lg"
                                        className="py-6"
                                    >
                                        <RotateCcw className="mr-2 h-5 w-5" />
                                        Reset
                                    </Button>
                                </div>

                                {/* Result Display */}
                                <div
                                    aria-live="polite"
                                    aria-atomic="true"
                                    className={`transition-all duration-500 ease-out ${showResult
                                        ? 'opacity-100 transform scale-100'
                                        : 'opacity-0 transform scale-95 pointer-events-none h-0 overflow-hidden'
                                        }`}
                                >
                                    {result && (
                                        <div className="mt-6 p-6 rounded-lg bg-primary/5 border border-primary/20 space-y-4">
                                            {/* Price Breakdown - Simple display without formula */}
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="text-muted-foreground">Ball Price</p>
                                                    <p className="text-lg font-semibold">{formatCurrency(result.unitPrice)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Quantity</p>
                                                    <p className="text-lg font-semibold">{inputsUsed?.quantity}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">
                                                        {result.discountPercent >= 0 ? 'Discount' : 'Adjustment'}
                                                    </p>
                                                    <p className={`text-lg font-semibold ${result.discountPercent > 0
                                                        ? 'text-green-600 dark:text-green-400'
                                                        : result.discountPercent < 0
                                                            ? 'text-orange-600 dark:text-orange-400'
                                                            : ''
                                                        }`}>
                                                        {result.discountPercent > 0 ? '-' : ''}{Math.abs(result.discountPercent).toFixed(2)}%
                                                    </p>
                                                </div>
                                                {result.minBillApplied && (
                                                    <div>
                                                        <p className="text-muted-foreground">Min Bill Applied</p>
                                                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">Yes</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Total Price */}
                                            <div className="pt-4 border-t border-primary/20 flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm text-muted-foreground mb-1">Total Price</p>
                                                    <p className="text-4xl font-bold text-primary">
                                                        {formatCurrency(result.finalPrice)}
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={handleCopy}
                                                    className="h-12 w-12"
                                                    title="Copy price to clipboard"
                                                >
                                                    {copied ? (
                                                        <Check className="h-6 w-6 text-green-600" />
                                                    ) : (
                                                        <Copy className="h-6 w-6" />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
            <Suspense fallback={null}>
                <WhatsAppChat message={`Hi ${siteConfig.name}. I have a question about pricing.`} />
            </Suspense>
        </div>
    );
}
