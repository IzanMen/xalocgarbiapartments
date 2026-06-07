import{p as t}from"./react-oU3ccdd-.js";import{c as n,i as u,P as d}from"./sanity-BbvaKTBW.js";const m="anlys3u4",p="production",l=n({projectId:m,dataset:p,apiVersion:"2025-01-01",useCdn:!0,perspective:"published"}),i=`
  _id,
  "title": coalesce(title[$locale], title.es, title),
  slug,
  "excerpt": coalesce(excerpt[$locale], excerpt.es, excerpt),
  "mainImage": mainImage{
    ...,
    "alt": coalesce(alt[$locale], alt.es, alt),
    "caption": coalesce(caption[$locale], caption.es, caption)
  },
  publishedAt,
  "author": author->{
    name,
    slug
  },
  "categories": categories[]->{
    "title": coalesce(title[$locale], title.es, title),
    slug
  }
`,x=`
  _id,
  "title": coalesce(title[$locale], title.es, title),
  slug,
  "excerpt": coalesce(excerpt[$locale], excerpt.es, excerpt),
  "seoTitle": coalesce(seoTitle[$locale], seoTitle.es, seoTitle),
  "metaDescription": coalesce(metaDescription[$locale], metaDescription.es, metaDescription),
  keywords,
  "mainImage": mainImage{
    ...,
    "alt": coalesce(alt[$locale], alt.es, alt),
    "caption": coalesce(caption[$locale], caption.es, caption)
  },
  publishedAt,
  "updatedAt": _updatedAt,
  "body": coalesce(body[$locale], body.es, body),
  "author": author->{
    _id,
    name,
    slug,
    image,
    "bio": coalesce(bio[$locale], bio.es, bio)
  },
  "categories": categories[]->{
    "title": coalesce(title[$locale], title.es, title),
    slug
  }[defined(@)],
  "faqs": faqs[]{
    _key,
    "question": coalesce(question[$locale], question.es, question),
    "answer": coalesce(answer[$locale], answer.es, answer)
  },
  "relatedPosts": relatedPosts[]->{${i}}
`;function r(e){return Array.isArray(e.categories)&&(e.categories=e.categories.filter(s=>s!=null&&typeof s=="object")),e}async function j(e){return(await l.fetch(`*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {${i}}`,{locale:e})??[]).map(r)}async function w(e,s){const a=await l.fetch(`*[_type == "post" && slug.current == $slug && defined(slug.current) && publishedAt <= now()][0] {${x}}`,{slug:e,locale:s});return a?(r(a),Array.isArray(a.relatedPosts)&&(a.relatedPosts=a.relatedPosts.filter(o=>o!=null&&typeof o=="object").map(o=>r(o))),a):null}const f=`
  _id,
  "question": coalesce(question[$locale], question.es, question),
  "answer": coalesce(answer[$locale], answer.es, answer),
  order,
  publishedAt
`;async function A(e){return l.fetch(`*[_type == "faq" && publishedAt <= now()] | order(coalesce(order, 9999) asc, publishedAt desc) {${f}}`,{locale:e})}const g=u(l);function b(e){return g.image(e)}const h={types:{image:({value:e})=>{if(!e?.asset?._ref)return null;const s=b(e).width(1200).fit("max").auto("format").url();return t.jsxs("figure",{className:"my-10",children:[t.jsx("img",{src:s,alt:e.alt??"",loading:"lazy",decoding:"async",className:"w-full h-auto"}),e.caption&&t.jsx("figcaption",{className:"text-xs text-muted-foreground mt-3 text-center italic",children:e.caption})]})}},block:{normal:({children:e})=>t.jsx("p",{className:"mb-6 leading-relaxed text-foreground/85 text-base sm:text-lg font-light",children:e}),h2:({children:e})=>t.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mt-14 mb-6 tracking-tight leading-tight",children:e}),h3:({children:e})=>t.jsx("h3",{className:"text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-5 tracking-tight leading-tight",children:e}),h4:({children:e})=>t.jsx("h4",{className:"text-lg sm:text-xl md:text-2xl font-serif font-semibold text-foreground mt-8 mb-4 tracking-tight leading-snug",children:e}),blockquote:({children:e})=>t.jsx("blockquote",{className:"border-l-2 border-primary pl-6 italic my-8 text-foreground/80 font-serif text-lg sm:text-xl leading-relaxed",children:e})},list:{bullet:({children:e})=>t.jsx("ul",{className:"list-disc pl-6 mb-6 space-y-2 text-foreground/85 marker:text-primary",children:e}),number:({children:e})=>t.jsx("ol",{className:"list-decimal pl-6 mb-6 space-y-2 text-foreground/85 marker:text-primary",children:e})},marks:{strong:({children:e})=>t.jsx("strong",{className:"font-semibold text-foreground",children:e}),em:({children:e})=>t.jsx("em",{className:"italic",children:e}),link:({value:e,children:s})=>{const a=e?.href??"",o=/^(https?:\/\/|mailto:|tel:|\/)/i.test(a)?a:"#",c=/^https?:\/\//i.test(o);return t.jsx("a",{href:o,...c?{target:"_blank",rel:"noopener noreferrer"}:{},className:"text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors",children:s})}}};function N({value:e}){return t.jsx(d,{value:e,components:h})}export{N as P,j as a,w as b,A as f,b as u};
