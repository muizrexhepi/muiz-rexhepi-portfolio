type ProjectOutcome = {
  mission: string;
  result: string;
  facts?: { value: string; label: string; detail: string }[];
};

// Product facts describe delivered capabilities, not unmeasured business gains.
export const projectOutcomes: Record<string, ProjectOutcome> = {
  "rendo-pos": {
    mission: "Connect ordering, preparation, and management around the way a hospitality venue actually works.",
    result: "Guests can order through QR or kiosk interfaces, staff can take orders and manage payment, and preparation teams receive the work assigned to them. Owners have menu, shift, stock, and sales tools connected to the same operation.",
    facts: [
      { value: "3", label: "Ordering surfaces", detail: "Staff POS, guest QR ordering, and self-service kiosk." },
      { value: "Order → pickup", label: "Connected service flow", detail: "Payment, preparation stations, and ready-order displays." },
      { value: "Venue → owner", label: "Operational visibility", detail: "Location-specific menus, shifts, stock, and sales reporting." },
    ],
  },
  "doros-premium": {
    mission: "Give a Swiss coffee brand a credible, product-led storefront for the Macedonian market.",
    result: "The live storefront presents the coffee range with a consistent brand identity, product browsing, and responsive shopping pages. The business has a dedicated local presence customers can explore before purchasing.",
    facts: [{ value: "CH → MK", label: "Market adaptation", detail: "Swiss brand positioning translated into a Macedonian storefront." }],
  },
  "ulliri-garden": {
    mission: "Connect the restaurant’s online presence to the ordering and service experience at Ulliri Garden.",
    result: "Ulliri has a live restaurant website and Garden experience, with mobile ordering linked to cashier confirmation, kitchen and bar preparation, and pickup. Guests and staff each have an interface for their part of the same order.",
    facts: [
      { value: "3", label: "Ordering languages", detail: "Albanian, Macedonian, and English in the guest ordering interface." },
      { value: "Kitchen + bar", label: "Preparation routing", detail: "Items and print tickets follow their configured station." },
      { value: "QR → pickup", label: "Customer journey", detail: "Browse, customize, send, pay at the cashier, and collect." },
    ],
  },
  "ido-tours": {
    mission: "Let passengers book a journey online while giving the company tools to manage the bookings behind it.",
    result: "Passengers can search scheduled routes, choose a trip, pay online, and receive digital tickets. Staff have administrative workflows for bookings, tickets, and company operations.",
    facts: [
      { value: "One-way + return", label: "Journey options", detail: "Search by route, travel date, and passenger count." },
      { value: "Booking → ticket", label: "Passenger flow", detail: "Trip selection, online payment, and digital ticket delivery." },
    ],
  },
  "villa-noar": {
    mission: "Help guests choose a villa and dates while keeping the owner in control of reservations.",
    result: "Guests can explore the properties, check live availability, and request a stay. The owner can review and confirm requests, manage availability, and record bookings from other channels.",
    facts: [
      { value: "3", label: "Guest languages", detail: "Albanian, Macedonian, and English across the property experience." },
      { value: "Owner-confirmed", label: "Reservation model", detail: "Guests request a stay; the owner reviews before confirming." },
    ],
  },
  asknoel: {
    mission: "Bring market research, news, and conversational assistance into one coherent crypto product.",
    result: "The product combines market dashboards, editorial content, an AI assistant, and a mobile experience. Users can move between information and research tools within a connected product.",
  },
  "agim-tours": {
    mission: "Connect the travel agency’s public offer with the work its staff and partner agencies manage behind the scenes.",
    result: "A customer-facing travel website is backed by booking operations and agency management workflows. The same digital foundation supports presenting trips and managing the business behind them.",
  },
  hakbus: {
    mission: "Give passengers clear booking journeys and staff practical tools for transport operations.",
    result: "Passenger web and mobile flows are connected to internal dashboards and operator workflows, supporting the journey from customer booking to company administration.",
  },
  logly: {
    mission: "Make everyday nutrition tracking easier to keep up with.",
    result: "The shipped iOS product turns plain-language meal descriptions into nutrition logs and connects them to goals, weekly insights, subscriptions, and Apple Health synchronization.",
  },
  gobusly: {
    mission: "Make regional bus trips easier to discover and book online.",
    result: "Travellers can explore destinations and routes, make reservations, and complete payment online. Operator tools and customer notifications support the work after a booking is made.",
  },
  nextloop: {
    mission: "Make luxury product discovery and auction participation feel clear and trustworthy.",
    result: "The marketplace combines product presentation with browsing, auction, and bidding flows. Buyers can evaluate listings and understand the next action across desktop and mobile.",
  },
  speaksure: {
    mission: "Give people a practical way to rehearse important conversations before they happen.",
    result: "The iOS app provides a repeatable loop of voice practice, transcription, feedback, and scenario-based coaching, with drill history so users can revisit their practice.",
  },
  "am-gebaeudereinigung": {
    mission: "Help customers understand the cleaning company’s services and make it easier for the business to maintain its website.",
    result: "A responsive service website gives customers clear information and a path to inquiry. The business can keep service content current through its content management system.",
  },
};
