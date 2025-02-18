# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- this project was created with "npm create vite@latest"
- to run the project: npm run dev
- to deploy the project to github pages: npm run deploy

-create a file user src with the name react-app-env.d.ts and put this code there:

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

---------------------------------------

-create a file under root with the name tsconfig.json and place the following content in it:

{
    "compilerOptions": {
        "jsx": "react",
        "strict": true,
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "esModuleInterop": true,
        "skipLibCheck": true
    }
}