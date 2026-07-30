# Workspace Guidelines (Website_v1)

## 📌 Project Summary
* **Name**: NForceOne — *Scale at Speed*
* **Stack**: React 18 + Vite | Tailwind CSS | Lucide React | Plus Jakarta Sans
* **Output**: `dist/`

## 📁 Key Architecture
* `src/data/`: `servicesData.js` (30 services taxonomy), `industriesData.js` (6 vertical solutions)
* `src/components/layout/`: `TopUtilityStrip.jsx`, `Navbar.jsx`, `Footer.jsx`
* `src/components/common/`: `AuditForm.jsx`
* `src/components/views/`: `HomeView`, `ServicesView`, `ServiceDetailView`, `IndustriesView`, `IndustryDetailView`, `AboutView`, `CareersFaqView`, `ContactView`
* `src/App.jsx`: Clean state router container (`currentTab`, `selectedService`, `selectedIndustry`)

## 🎨 Design System & Tokens
* **Colors**: NForce Red (`#E60000`), Jet Black (`#0A0A0A`), Slate (`#121212`, `#171717`), Light Slate (`#FAFAFA`)
* **Style**: High-contrast dark/light sections, glassmorphic headers, card hover scales.

## ⚡ Agent Execution Rules
1. **Modular Components**: Place UI inside `src/components/` and datasets in `src/data/`. Do not bloat `App.jsx`.
2. **Build Verification**: Run `npm run build` after structural edits to ensure 0 compilation errors.
3. **Icons & Styling**: Use `lucide-react` icons and project Tailwind color utilities.
