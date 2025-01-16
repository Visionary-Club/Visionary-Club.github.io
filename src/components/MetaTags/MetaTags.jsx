// src/components/MetaTags/MetaTags.jsx
import { Helmet } from "react-helmet";
import logoPath from '/logo.png';

export const MetaTags = ({ title = "Visionary Club", description = "Join the next generation of technology innovators" }) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href={logoPath} />
        <link rel="apple-touch-icon" href={logoPath} />
        <link rel="shortcut icon" href={logoPath} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoPath} />

        {/* PWA */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0a192f" />

        {/* Windows Tile */}
        <meta name="msapplication-TileImage" content={logoPath} />
        <meta name="msapplication-TileColor" content="#0a192f" />
    </Helmet>
);