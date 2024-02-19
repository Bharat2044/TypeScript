# **TypeScript Setup in Your Local System:**
**Setting up TypeScript on your local system involves a few steps. TypeScript is a superset of JavaScript that adds static typing to the language, and it compiles down to plain JavaScript.**

## `Here's tep-by-step guide to set up TypeScript on your local system:`

## Step 1: Install Node.js and npm
TypeScript relies on Node.js and npm for package management. You can download and install Node.js.
#### **1. Download Node.js:**
Visit the official Node.js website: [Node.js](https://nodejs.org/en)

#### **2. Install Node.js:** 
Follow the installation instructions for your operating system. This will also install npm (Node Package Manager).

#### **3. Verify Installation:** 
Open a terminal or command prompt and run the following commands to verify that Node.js and npm are installed:
```bash
node -v
npm -v
```
You should see version numbers for Node.js and npm.


## Step 2: Install TypeScript
#### **1. Install TypeScript Globally:**
Open a terminal or command prompt and run the following command to install TypeScript globally using npm:
```bash
npm install -g typescript
```
This installs the TypeScript compiler (`tsc`) globally on your system.

#### **2. Verify TypeScript Installation:**
Run the following command to check the TypeScript version:
```bash
tsc -v
```
You should see the installed TypeScript version.


## Step 3: Create a TypeScript Project
#### **1. Create a Project Directory:**
Choose or create a directory for your TypeScript project. Open a terminal, navigate to this directory, and create a new folder for your project.
```bash
mkdir mytypescriptproject
cd mytypescriptproject
```

#### **2. Initialize a package.json file:**
Run the following command to create a package.json file. Follow the prompts to provide information about your project.
```bash
npm init
```


## Step 4: Create a TypeScript File and Write TypeScript Code
#### **1. Create a TypeScript File:**
Inside your project directory, create a new TypeScript file with a `.ts` extension. For example, `app.ts`. You can use any code editor of your choice, such as Visual Studio Code, Sublime Text, or Atom.

#### **2. Write TypeScript code:**
Write your TypeScript code in the `.ts` file.
```typescript
// app.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const result = greet("TypeScript");
console.log(result);
```


## Step 5: Configure tsconfig.json (Optional)
#### **1. Generate a tsconfig.json File:**
You can create a tsconfig.json file to configure TypeScript compilation options. This file can include compiler options, file inclusion/exclusion settings, and more. <br/>
Run the following command to generate a basic tsconfig.json file:
```bash
tsc --init
```
This will create a default tsconfig.json file that you can customize.

#### **2. Configure tsconfig.json:**
Open the generated tsconfig.json file and customize it according to your project requirements.


## Step 6: Compile TypeScript Code
#### **1. Compile TypeScript Code:**
Open a terminal or command prompt and navigate to the directory containing your TypeScript file. Run the following command to compile the TypeScript code into JavaScript:
```bash
tsc app.ts
```
This will generate a corresponding JavaScript files('app.js`) based on your TypeScript code.


## Step 7. Run the JavaScript code
#### **1. Run the JavaScript code:**
Now you can run the generated JavaScript code using Node.js:
```bash
node app.js
```


#### **That's it! You've set up TypeScript on your local system. You can now continue developing in TypeScript and use its features for static typing and other enhancements.**


<br />
<br />
<br />
<hr/>
<hr/>
<br />
<br />
<br />




# Getting Started with TypeScript

**TypeScript is a superset of JavaScript that adds static typing and other features to help developers write more maintainable and scalable code.**


##  Here's a basic guide on how to use TypeScript:

## 1. Install TypeScript:
First, you need to install TypeScript globally on your machine using npm (Node Package Manager). Open your terminal or command prompt and run:
```bash
npm install -g typescript
```

## 2. Create a TypeScript file:
Create a file with a `.ts` extension. This file will contain your TypeScript code. For example, create a file named `app.ts`:
```typescript
// app.ts
function greet(name: string) {
  return `Hello, ${name}!`;
}

const result = greet("TypeScript");
console.log(result);
```

## 3. Compile TypeScript to JavaScript:
Compile the TypeScript file to JavaScript using the `tsc` command:
```bash
tsc app.ts
```
This will generate a corresponding `app.js` file.

## 4. Run the JavaScript code:
Run the compiled JavaScript code using Node.js or in your preferred JavaScript environment:
```bash
node app.js
```
You should see the output of your TypeScript program.

### 5. Type Annotations:
One of the main features of TypeScript is static typing. You can add type annotations to variables, parameters, and return types:
```typescript
function add(a: number, b: number): number {
  return a + b;
}

const sum: number = add(3, 5);
console.log(sum);
```

### 6. Interfaces and Classes:
TypeScript supports interfaces and classes for better code organization and reusability:
```typescript
interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const student = new Student("John", 25);
student.greet();
```

## 7. Configure TypeScript (Optional):
You can create a `tsconfig.json` file to configure TypeScript options. This file can include settings such as the target ECMAScript version, module system, and other compiler options. 
Here's a basic example:
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## 8. Using TypeScript with Frameworks:
If you're working with frameworks like Angular or React, there are specific TypeScript configurations and patterns to follow. Refer to the documentation for each framework.