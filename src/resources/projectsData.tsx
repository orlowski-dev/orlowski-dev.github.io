import { ageCalculatorApp, dcToDoImage, expensesChart, githubUserSearch, interactivePricingComponent, makerPreLunch, newsletterSignUp, officelite } from "../assets";

export interface IProjectCardData {
    readonly projectName: string,
    readonly sourceUrl: string,
    readonly previewUri: string,
    readonly previewImagePath: string,
    readonly tags: string[],
    readonly fmChallenge?: boolean,
    readonly dcChallenge?: boolean
}

export const projectCardData = [
    {
        projectName: 'Github user search app',
        sourceUrl: 'https://github.com/orlowski-dev/fm-github-user-search-app',
        previewUri: 'https://orlowski-dev.github.io/fm-github-user-search-app/',
        previewImagePath: githubUserSearch,
        tags: ['reactjs', 'ts'],
        fmChallenge: true,
    },
    {
        projectName: 'Marker pre-lunch landing page',
        sourceUrl: 'https://github.com/orlowski-dev/fm-maker-pre-lunch',
        previewUri: 'https://orlowski-dev.github.io/fm-maker-pre-lunch/',
        previewImagePath: makerPreLunch,
        tags: ['reactjs', 'js'],
        fmChallenge: true,
    },
    {
        projectName: 'Officelite coming soon',
        sourceUrl: 'https://github.com/orlowski-dev/fm-officelite-coming-soon',
        previewUri: 'https://orlowski-dev.github.io/fm-officelite-coming-soon/',
        previewImagePath: officelite,
        tags: ['reactjs', 'js'],
        fmChallenge: true,
    },
    {
        projectName: 'Newsletter sign up form',
        sourceUrl: 'https://github.com/orlowski-dev/fm-newsletter-sign-up-with-success-message',
        previewUri: 'https://orlowski-dev.github.io/fm-newsletter-sign-up-with-success-message/',
        previewImagePath: newsletterSignUp,
        tags: ['reactjs', 'js'],
        fmChallenge: true,
    },
    {
        projectName: 'Interactive pricing component',
        sourceUrl: 'https://github.com/orlowski-dev/fm-interactive-pricing-component',
        previewUri: 'https://orlowski-dev.github.io/fm-interactive-pricing-component/',
        previewImagePath: interactivePricingComponent,
        tags: ['reactjs', 'js'],
        fmChallenge: true
    },
    {
        projectName: 'Simple to do list',
        sourceUrl: 'https://github.com/orlowski-dev/dc-todo',
        previewUri: 'https://orlowski-dev.github.io/dc-todo',
        previewImagePath: dcToDoImage,
        tags: ['reactjs', 'js'],
        dcChallenge: true,
    },
    {
        projectName: 'Expenses chart component',
        sourceUrl: 'https://github.com/orlowski-dev/fm-expenses-chart-component',
        previewUri: 'https://orlowski-dev.github.io/fm-expenses-chart-component/',
        previewImagePath: expensesChart,
        tags: ['js'],
        fmChallenge: true,
    },
    {
        projectName: 'Age calculator app',
        sourceUrl: 'https://github.com/orlowski-dev/fm-age-calculator-app',
        previewUri: 'https://orlowski-dev.github.io/fm-age-calculator-app/',
        previewImagePath: ageCalculatorApp,
        tags: ['js'],
        fmChallenge: true,
    },
]