import { createGlobalStyle } from 'styled-components';

import ObjektivMk1TrialBd from '@/components/assets/fonts/ObjektivMk1_Trial_Bd.ttf';
import ObjektivMk1TrialRg from '@/components/assets/fonts/ObjektivMk1_Trial_Rg.ttf';
import ObjektivMk1TrialBlk from '@/components/assets/fonts/ObjektivMk1_Trial_Blk.ttf';

export const GlobalStyles = createGlobalStyle`
:root {
    --color-brand: #FF0022;
    --color-white: #FFFFFF;
    --color-primary-bg: #121212;
    --color-secondary-bg: #262626;
    --color-modal-bg: #121212;
    --color-primary-txt: #FFFFFF;
    --color-secondary-txt: #808080;
    --color-system: #FFFFFF;
    --color-outline: #404040;
    --color-success: #72c99a;

    --spacing-xxs: .25rem;
    --spacing-xs: .625rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.25rem;
    --spacing-lg: 2rem;
    --spacing-xl: 2.5rem;
    --spacing-2xl: 3.75rem;
    --spacing-3xl: 5rem; 

    --transition: all 300ms ease;
}

.light {
  --color-brand: #FF0022;
  --color-white: #FFFFFF;
  --color-primary-bg: #FFFFFF;
  --color-secondary-bg: #F2F2F2;
  --color-modal-bg: #DEDEDE;
  --color-primary-txt: #121212;
  --color-secondary-txt: #808080;
  --color-system: #000000;
  --color-outline: #DEDEDE;
  --color-success: #46B278;
}

* {
  box-sizing: border-box;
  font-family: 'Objektiv', sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  padding: 0;
  color: var(--color-primary-txt);
  background: var(--color-primary-bg);
  font-weight: 400;
  line-height: normal;
  width: 100%;
}

#root {
  height: 100%;
  min-height: 100%;
}

.active button {
  position: relative;
}

.active button::after {
  content: '';
  position: absolute;
  bottom: -1rem; 
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: var(--color-white);
  border-radius: 50%; 
}

@font-face {
    font-family: 'Objektiv';
    src: url(${ObjektivMk1TrialBlk}) format('truetype');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Objektiv';
    src: url(${ObjektivMk1TrialBd}) format('truetype');
    font-weight: 700;
    font-style: normal;
}

  @font-face {
    font-family: 'Objektiv';
    src: url(${ObjektivMk1TrialRg}) format('truetype');
    font-weight: 500;
    font-style: normal;
}

/* Toastify */
:root {
  --toastify-toast-min-height: 3.5rem;
  --toastify-toast-width: 22.5rem;
  --toastify-toast-bd-radius: .75rem;
  --toastify-toast-offset: 1.25rem;
  --toastify-font-family: "Objektiv", sans-serif;
  --toastify-box-shadow: .0625rem .375rem 1.25rem 0rem rgba(var(--color-neutral-rgb), 0.16);
  @media (min-width: 48rem) {
    --toastify-toast-top: 2.5rem;
  }
}
.Toastify__toast {
  padding: 1rem;
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-box-shadow);
  font-size: .875rem;
  line-height: calc(19 / 14);
  font-weight: 500;
  svg {
    flex-shrink: 0;
    * {
      stroke-width: .0625rem;
    }
  }
}
.Toastify__toast-icon {
  margin-inline-end: .75rem;
  width: 1.5rem;
}
.Toastify__toast-body {
  padding: 0 .75rem 0 0;
}
.Toastify__progress-bar {
  opacity: 1;
}

.Toastify__toast--success {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-txt);
}

.Toastify__toast--error {
  background-color: var(--color-primary-bg);
  color: var(--color-primary-txt);
}

`;
