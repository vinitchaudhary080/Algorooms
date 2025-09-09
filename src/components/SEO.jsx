// src/components/SEO.jsx
export default function SEO({
  title = 'Cryptomaty – Trade, Backtest & Deploy',
  description = 'Cryptomaty is a crypto trading platform to research, build, backtest, and deploy automated strategies.',
  keywords = 'cryptomaty, crypto trading, algorithmic trading, backtesting, deploy strategies, crypto bots',
  canonical = 'https://cryptomaty.app/',
  image = '/og-default.jpg',
  noindex = false,
  jsonLd = null,
}) {
  return (
    <>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Cryptomaty" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </>
  );
}
