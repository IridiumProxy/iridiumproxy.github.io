// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Iridium',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/IridiumProxy/iridiumproxy.github.io' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{label: 'Getting Started', slug: 'getting-started'},
						{label: 'Installation', slug: 'installation'},
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
