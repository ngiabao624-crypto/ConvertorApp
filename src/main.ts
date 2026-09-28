
const createConverter = (fromUnit: string, toUnit: string) => {
    
    // Returns the actual conversion arrow function
    return (input: number | number[]): number | number[] => {
        
        // Define the math logic based on the units passed in
        let convertLogic = (val: number): number => val; // fallback

        if (fromUnit === "kg" && toUnit === "lb") {
            convertLogic = (val) => val * 2.20462;
        } else if (fromUnit === "lb" && toUnit === "kg") {
            convertLogic = (val) => val * 0.45359237;
        } else if (fromUnit === "miles" && toUnit === "km") {
            convertLogic = (val) => val * 1.609344;
        } else if (fromUnit === "km" && toUnit === "miles") {
            convertLogic = (val) => val * 0.62137119;
        } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            convertLogic = (val) => (val * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            convertLogic = (val) => (val - 32) * 5/9;
        }

     
        if (Array.isArray(input)) {
            return input.map(convertLogic);
        } else {
            return convertLogic(input);
        }
    };
};


const kilogramsToPounds = createConverter("kg", "lb");
const poundsToKilograms = createConverter("lb", "kg");
const milesToKilometres = createConverter("miles", "km");
const kilometresToMiles = createConverter("km", "miles");
const celsiusToFahrenheit = createConverter("celsius", "fahrenheit");
const fahrenheitToCelsius = createConverter("fahrenheit", "celsius");


const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;

const lbInput = document.getElementById("lb-input") as HTMLInputElement;
const lbButton = document.getElementById("lb-button") as HTMLButtonElement;
const lbResult = document.getElementById("lb-result") as HTMLParagraphElement;

const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton= document.getElementById("miles-button") as HTMLButtonElement;
const milesResult = document.getElementById("miles-result") as HTMLParagraphElement;

const kilometresInput = document.getElementById("kilo-input") as HTMLInputElement;
const kilometresButton = document.getElementById("kilo-button") as HTMLButtonElement;
const kilometresResult = document.getElementById("kilo-result") as HTMLParagraphElement;

const celsiusInput = document.getElementById("celsius-input") as HTMLInputElement;
const celsiusButton = document.getElementById("celsius-button") as HTMLButtonElement;
const celsiusResult = document.getElementById("celsius-result") as HTMLParagraphElement;

const fahrenheitInput = document.getElementById("fahrenheit-input") as HTMLInputElement;
const fahrenheitButton = document.getElementById("fahrenheit-button") as HTMLButtonElement;
const fahrenheitResult = document.getElementById("fahrenheit-result") as HTMLParagraphElement;



