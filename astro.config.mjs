// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://iridiumproxy.github.io',
	integrations: [
		starlight({
			title: 'Iridium',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/IridiumProxy' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
						{ label: 'Installation', slug: 'installation' },
					],
				},
				{
					label: 'Hosts',
					items: [
						{ label: 'Hosts Configuration', slug: 'hosts/configuration' },
						{ label: 'Examples', slug: 'hosts/examples' },
						{ label: 'Variables', slug: 'hosts/variables' },
					],
				},
				{
					label: 'TLS',
					items: [
						{ label: 'Introduction', slug: 'tls/introduction' },
						{ label: 'Obtaining a Certificate', slug: 'tls/obtaining-certificate' },
						{ label: 'HTTPS Redirection', slug: 'tls/https-redirection' },
					],
				},
				{
					label: 'HTTP/2',
					items: [
						{ label: 'Introduction', slug: 'http2/introduction' },
					],
				},
				{
					label: 'Edge Cache',
					items: [
						{ label: 'Introduction', slug: 'edge-cache/introduction' },
					],
				},
				{
					label: 'WAF',
					items: [
						{ label: 'Introduction', slug: 'waf/introduction' },
						{ label: 'Captcha Protection', slug: 'waf/captcha' },
					],
				},
			],
		}),
	],
});
