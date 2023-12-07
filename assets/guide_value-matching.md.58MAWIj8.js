import{_ as t,o as e,c as a,R as l}from"./chunks/framework.9wX4afup.js";const y=JSON.parse('{"title":"Built-in Value Matching Strategies","description":"","frontmatter":{},"headers":[],"relativePath":"guide/value-matching.md","filePath":"guide/value-matching.md"}'),d={name:"guide/value-matching.md"},i=l('<h1 id="built-in-value-matching-strategies" tabindex="-1">Built-in Value Matching Strategies <a class="header-anchor" href="#built-in-value-matching-strategies" aria-label="Permalink to &quot;Built-in Value Matching Strategies&quot;">​</a></h1><p>The following value matching strategies are supported:</p><table><thead><tr><th style="text-align:left;">The type of the property in source model</th><th style="text-align:left;">Available matching strategies</th><th style="text-align:left;">Default strategy</th></tr></thead><tbody><tr><td style="text-align:left;">Integer numbers<br><br>(sbyte, byte, short, ushort, int, uint, long, ulong)</td><td style="text-align:left;"><code>Equals</code> <br><code>Contains</code></td><td style="text-align:left;"><code>Equals</code></td></tr><tr><td style="text-align:left;">String</td><td style="text-align:left;"><code>Contains</code><br><code>StartsWith</code><br><code>EndsWith</code><br><code>SQLServerContains</code><br><code>SQLServerFreeText</code></td><td style="text-align:left;"><code>Contains</code></td></tr><tr><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>Equals</code></td><td style="text-align:left;"><code>Equals</code></td></tr><tr><td style="text-align:left;">Enum</td><td style="text-align:left;"><code>Equals</code></td><td style="text-align:left;"><code>Equals</code></td></tr><tr><td style="text-align:left;">DateTime</td><td style="text-align:left;">The matching strategy is determined by the passed filtering value.<br><br>If single date is passed - <code>Equals</code><br>If date range is passed - <code>Between</code></td><td style="text-align:left;">N/A</td></tr><tr><td style="text-align:left;">Any other type</td><td style="text-align:left;">Treated as a string type by executing <code>Property.ToString()</code></td><td style="text-align:left;"><code>Contains</code></td></tr></tbody></table>',3),n=[i];function s(o,r,c,g,u,h){return e(),a("div",null,n)}const x=t(d,[["render",s]]);export{y as __pageData,x as default};
