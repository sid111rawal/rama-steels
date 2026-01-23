/**
 * Price Calculator Utilities for Steel Ball Pricing
 * ==================================================
 * 
 * FORMULA (hidden from UI, shown in developer panel only):
 * ---------------------------------------------------------
 * 1. BaseRate = Size × RatePerMM
 * 2. Diff = Quantity - MOQ
 * 3. DiscountPercent:
 *    - If Quantity >= MOQ: Diff × 0.5 (0.5% bulk discount per unit above MOQ)
 *    - If Quantity < MOQ: Diff × 2.5 (2.5% surcharge per unit below MOQ)
 * 4. UnitPrice = BaseRate × (1 - DiscountPercent / 100)
 * 5. FinalPrice = max(UnitPrice × Quantity, MinBillValue)
 * 
 * UNITS:
 * - Size: Ball diameter in millimeters (mm)
 * - RatePerMM: Price per mm of diameter (₹/mm)
 * - Quantity: Number of balls (integer)
 * - MOQ: Minimum Order Quantity (integer)
 * - MinBillValue: Minimum billing threshold (₹)
 * 
 * DISCOUNT RATES:
 * - Above MOQ: 0.5% discount per unit above MOQ (bulk discount)
 * - Below MOQ: 2.5% surcharge per unit below MOQ (small order penalty)
 * 
 * VALIDATION RULES:
 * - Size: 0.1 ≤ x ≤ 500 (mm)
 * - Quantity: Integer ≥ 1
 * - RatePerMM: ≥ 0
 * - MOQ: Integer ≥ 0
 * - MinBillValue: ≥ 0
 * 
 * TEST CASES (runSanityTests):
 * Based on original site testing with Size=3, Rate=100, MOQ=20, MinBill=3000:
 * - Test A: Qty=20 (at MOQ) → Discount=0%, UnitPrice=300, Total=6000
 * - Test B: Qty=10 (below MOQ) → Discount=-25%, UnitPrice=375, Total=3750
 * - Test C: Qty=21 (above MOQ) → Discount=0.5%, UnitPrice=298.5, Total=6268.50
 * - Test D: Qty=1 (far below MOQ) → UnitPrice=442.5, Total=442.5 → MinBill=3000
 * - Test E: Qty=100 (far above MOQ) → Discount=40%, UnitPrice=180, Total=18000
 * 
 * To run tests: Open browser console and call window.runSanityTests()
 */

// Currency configuration (easily changeable)
export const CURRENCY_SYMBOL = "₹";
export const CURRENCY_LOCALE = "en-IN";

// Discount/Surcharge rates (configurable)
const BULK_DISCOUNT_RATE = 0.5;    // 0.5% discount per unit above MOQ
const SMALL_ORDER_SURCHARGE_RATE = 2.5;  // 2.5% surcharge per unit below MOQ

export interface CalculatorInputs {
    size: number;        // Ball diameter in mm
    quantity: number;    // Number of balls
    ratePerMM: number;   // Price per mm (currency/mm)
    moq: number;         // Minimum Order Quantity
    minBillValue: number; // Minimum billing value
}

export interface CalculatorResult {
    baseRate: number;           // Size × RatePerMM
    quantityDiff: number;       // Quantity - MOQ
    discountPercent: number;    // The calculated discount/surcharge %
    unitPrice: number;          // Price per ball after discount
    subtotal: number;           // UnitPrice × Quantity
    finalPrice: number;         // max(subtotal, MinBillValue)
    minBillApplied: boolean;    // Whether MinBillValue was applied
}

export interface ValidationError {
    field: keyof CalculatorInputs;
    message: string;
}

/**
 * Validates calculator inputs and returns any validation errors
 */
export function validateInputs(inputs: Partial<CalculatorInputs>): ValidationError[] {
    const errors: ValidationError[] = [];

    // Size validation: 0.1 ≤ x ≤ 500
    if (inputs.size === undefined || inputs.size === null || isNaN(inputs.size)) {
        errors.push({ field: 'size', message: 'Size is required' });
    } else if (inputs.size < 0.1) {
        errors.push({ field: 'size', message: 'Size must be at least 0.1 mm' });
    } else if (inputs.size > 500) {
        errors.push({ field: 'size', message: 'Size must be 500 mm or less' });
    }

    // Quantity validation: Integer ≥ 1
    if (inputs.quantity === undefined || inputs.quantity === null || isNaN(inputs.quantity)) {
        errors.push({ field: 'quantity', message: 'Quantity is required' });
    } else if (!Number.isInteger(inputs.quantity)) {
        errors.push({ field: 'quantity', message: 'Quantity must be a whole number' });
    } else if (inputs.quantity < 1) {
        errors.push({ field: 'quantity', message: 'Quantity must be at least 1' });
    }

    // Rate validation: ≥ 0
    if (inputs.ratePerMM === undefined || inputs.ratePerMM === null || isNaN(inputs.ratePerMM)) {
        errors.push({ field: 'ratePerMM', message: 'Rate per mm is required' });
    } else if (inputs.ratePerMM < 0) {
        errors.push({ field: 'ratePerMM', message: 'Rate must be a positive number' });
    }

    // MOQ validation: Integer ≥ 0
    if (inputs.moq === undefined || inputs.moq === null || isNaN(inputs.moq)) {
        errors.push({ field: 'moq', message: 'MOQ is required' });
    } else if (!Number.isInteger(inputs.moq)) {
        errors.push({ field: 'moq', message: 'MOQ must be a whole number' });
    } else if (inputs.moq < 0) {
        errors.push({ field: 'moq', message: 'MOQ must be 0 or greater' });
    }

    // MinBillValue validation: ≥ 0
    if (inputs.minBillValue === undefined || inputs.minBillValue === null || isNaN(inputs.minBillValue)) {
        errors.push({ field: 'minBillValue', message: 'Minimum bill value is required' });
    } else if (inputs.minBillValue < 0) {
        errors.push({ field: 'minBillValue', message: 'Minimum bill must be 0 or greater' });
    }

    return errors;
}

/**
 * Calculates the price using the dynamic discount/surcharge formula
 * IMPORTANT: Call validateInputs first to ensure inputs are valid
 */
export function calculatePrice(inputs: CalculatorInputs): CalculatorResult {
    const { size, quantity, ratePerMM, moq, minBillValue } = inputs;

    // Step 1: BaseRate = Size × RatePerMM
    const baseRate = size * ratePerMM;

    // Step 2: Calculate difference from MOQ
    const quantityDiff = quantity - moq;

    // Step 3: Calculate discount/surcharge percentage
    let discountPercent: number;
    if (quantity >= moq) {
        // Above or at MOQ: 0.5% bulk discount per unit above
        discountPercent = quantityDiff * BULK_DISCOUNT_RATE;
    } else {
        // Below MOQ: 2.5% surcharge per unit below (quantityDiff is negative)
        discountPercent = quantityDiff * SMALL_ORDER_SURCHARGE_RATE;
    }

    // Step 4: Calculate unit price after discount/surcharge
    const unitPrice = baseRate * (1 - discountPercent / 100);

    // Step 5: Calculate subtotal
    const subtotal = unitPrice * quantity;

    // Step 6: Apply minimum bill value
    const minBillApplied = subtotal < minBillValue;
    const finalPrice = Math.max(subtotal, minBillValue);

    return {
        baseRate,
        quantityDiff,
        discountPercent,
        unitPrice,
        subtotal,
        finalPrice,
        minBillApplied,
    };
}

/**
 * Formats a number as currency with thousands separators
 */
export function formatCurrency(amount: number, symbol: string = CURRENCY_SYMBOL): string {
    const formatted = amount.toLocaleString(CURRENCY_LOCALE, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return `${symbol}${formatted}`;
}

/**
 * Parses a form input value to a number, handling empty strings
 */
export function parseInputValue(value: string): number {
    if (value.trim() === '') return NaN;
    return parseFloat(value);
}

/**
 * Parses a form input value to an integer, handling empty strings
 */
export function parseIntegerValue(value: string): number {
    if (value.trim() === '') return NaN;
    const parsed = parseFloat(value);
    return Number.isInteger(parsed) ? parsed : parseFloat(value);
}

// ============================================
// TEST HARNESS
// ============================================

interface TestCase {
    name: string;
    inputs: CalculatorInputs;
    expectedFinal: number;
    expectedDiscount: number;
    expectedUnitPrice: number;
}

// Test cases based on original site verification
// Size=3, Rate=100, MOQ=20, MinBill=3000
const TEST_CASES: TestCase[] = [
    {
        name: 'Test A: At MOQ (Qty=20) - No discount',
        inputs: { size: 3, ratePerMM: 100, moq: 20, quantity: 20, minBillValue: 3000 },
        expectedFinal: 6000,
        expectedDiscount: 0,
        expectedUnitPrice: 300,
    },
    {
        name: 'Test B: Below MOQ (Qty=10) - 25% surcharge',
        inputs: { size: 3, ratePerMM: 100, moq: 20, quantity: 10, minBillValue: 3000 },
        expectedFinal: 3750,
        expectedDiscount: -25,
        expectedUnitPrice: 375,
    },
    {
        name: 'Test C: Above MOQ (Qty=21) - 0.5% discount',
        inputs: { size: 3, ratePerMM: 100, moq: 20, quantity: 21, minBillValue: 3000 },
        expectedFinal: 6268.50,
        expectedDiscount: 0.5,
        expectedUnitPrice: 298.5,
    },
    {
        name: 'Test D: Far below MOQ (Qty=1) - MinBill applies',
        inputs: { size: 3, ratePerMM: 100, moq: 20, quantity: 1, minBillValue: 3000 },
        expectedFinal: 3000, // MinBill kicks in (442.5 < 3000)
        expectedDiscount: -47.5,
        expectedUnitPrice: 442.5,
    },
    {
        name: 'Test E: Far above MOQ (Qty=100) - 40% discount',
        inputs: { size: 3, ratePerMM: 100, moq: 20, quantity: 100, minBillValue: 3000 },
        expectedFinal: 18000,
        expectedDiscount: 40,
        expectedUnitPrice: 180,
    },
];

export interface TestResult {
    name: string;
    passed: boolean;
    expectedFinal: number;
    actualFinal: number;
    expectedDiscount: number;
    actualDiscount: number;
    inputs: CalculatorInputs;
}

/**
 * Runs sanity tests and returns results
 * Call via browser console: window.runSanityTests()
 */
export function runSanityTests(): TestResult[] {
    const results: TestResult[] = [];

    for (const testCase of TEST_CASES) {
        const result = calculatePrice(testCase.inputs);
        const finalPassed = Math.abs(result.finalPrice - testCase.expectedFinal) < 0.01;
        const discountPassed = Math.abs(result.discountPercent - testCase.expectedDiscount) < 0.01;
        const passed = finalPassed && discountPassed;

        results.push({
            name: testCase.name,
            passed,
            expectedFinal: testCase.expectedFinal,
            actualFinal: result.finalPrice,
            expectedDiscount: testCase.expectedDiscount,
            actualDiscount: result.discountPercent,
            inputs: testCase.inputs,
        });
    }

    // Log results to console
    console.log('='.repeat(70));
    console.log('PRICE CALCULATOR - SANITY TESTS (Dynamic Discount Formula)');
    console.log('='.repeat(70));

    let allPassed = true;
    for (const r of results) {
        const status = r.passed ? '✅ PASS' : '❌ FAIL';
        console.log(`\n${status}: ${r.name}`);
        console.log(`  Inputs: Size=${r.inputs.size}, Rate=${r.inputs.ratePerMM}, MOQ=${r.inputs.moq}, Qty=${r.inputs.quantity}, MinBill=${r.inputs.minBillValue}`);
        console.log(`  Discount: Expected ${r.expectedDiscount}%, Got ${r.actualDiscount}%`);
        console.log(`  Final: Expected ${r.expectedFinal}, Got ${r.actualFinal}`);
        if (!r.passed) allPassed = false;
    }

    console.log('\n' + '='.repeat(70));
    console.log(allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED');
    console.log('='.repeat(70));

    return results;
}

// Expose to window for easy console access
if (typeof window !== 'undefined') {
    (window as unknown as { runSanityTests: typeof runSanityTests }).runSanityTests = runSanityTests;
}
