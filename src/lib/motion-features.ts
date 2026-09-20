// Split point for framer-motion's feature bundle. Keeping this in its own
// module lets Vite emit it as a separate chunk that loads after first paint
// instead of blocking it.
export { domMax as default } from 'framer-motion';
