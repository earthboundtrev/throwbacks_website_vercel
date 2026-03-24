# Party booking requirements

**Status:** Product specification for a future feature. The live site today uses static pages and contact forms; this document does **not** describe current production behavior.

---

## Table of contents

- [Overview](#overview)
- [Booking types](#booking-types)
- [Core booking features](#core-booking-features)
- [User account management](#user-account-management)
- [Admin and staff](#admin-and-staff)
- [Notifications and reminders](#notifications-and-reminders)
- [Waitlist](#waitlist)
- [Cancellation and refunds](#cancellation-and-refunds)
- [User experience](#user-experience)
- [Integrations](#integrations)
- [Security and compliance](#security-and-compliance)
- [Technical requirements](#technical-requirements)
- [Future enhancements](#future-enhancements)
- [Success metrics](#success-metrics)
- [Implementation phases](#implementation-phases)
- [Notes](#notes)

---

## Overview

This document describes requirements for an online booking system on the party page—similar to typical reservation platforms: customers book private parties or business-hours parties, pay online, and receive confirmations.

---

## Booking types

### Private parties

| Item | Detail |
| --- | --- |
| Base package | $300 |
| Duration | 2 hours exclusive access |
| Included guests | 20 passes |
| Additional guests | $10 per person beyond 20 |

**Includes**

- Exclusive private party area
- Option to bring cake and decorations
- Option to stay and play after the party during regular business hours

### Business hours parties

| Item | Detail |
| --- | --- |
| Pricing | $10 per person |
| Minimum | 10 guests |

**Includes**

- Access during regular business hours
- Bring your own cake
- Access to arcade and pinball
- No exclusive space reservation

---

## Core booking features

### Calendar and availability

**Calendar UI**

- Available time slots for private parties
- Blocked / unavailable dates
- Peak times and special dates visible
- Business hours visible for business-hours parties

**Slot rules**

- Configurable slots (e.g. 10–12, 2–4, 6–8)
- Buffer time between bookings (cleanup / setup)
- Blackout dates (holidays, maintenance, events)
- Minimum advance notice (e.g. 48 hours)
- Maximum advance window (e.g. 90 days)

### Booking form

**Required fields**

- Party type (private vs business hours)
- Date
- Time slot (private parties)
- Guest count
- Contact: name, email, phone
- Occasion type (birthday, corporate, etc.)
- Optional notes / special requests

**Pricing logic**

- **Private:** $300 base + $10 × max(0, guests − 20); live total
- **Business hours:** $10 × guests; enforce minimum 10 guests

### Payment processing

- Full pay at booking and/or deposit (e.g. 50%) with balance before event
- Gateway: Stripe, Square, or similar
- PCI-aligned handling; encrypted transactions
- Email receipt and printable confirmation page

### Booking confirmation

**Immediate**

- On-screen success message
- Unique booking reference
- Summary of details

**Email**

- Reference, date/time/duration, guest count, amount paid, address, prep instructions, cancellation policy, support contact

---

## User account management

### Registration

- Account during checkout vs guest checkout
- Optional social login (Google, Facebook)

### Account capabilities

- Booking history, upcoming trips, cancel/modify within policy
- Optional saved payment methods
- Update contact info

### History

- Past bookings, receipts, optional reviews
- Upcoming: modify, cancel, re-book similar events

---

## Admin and staff

### Admin dashboard

**Bookings**

- Calendar and list views; filters (date, status, type)
- Search by name, email, reference
- Edit, cancel, mark complete

**Availability**

- Block/unblock slots, business hours, intervals, blackouts, pricing overrides

### Staff

- View bookings, check-in, walk-ins, customer view, role-limited edits

### Reporting

- Daily/weekly/monthly summaries, revenue, peak times, party mix, average headcount
- Repeat customers and trends

---

## Notifications and reminders

### Email

- Confirmation immediately
- Reminders (e.g. 7 days and 24 hours before)
- Cancellation and change notices

### SMS (optional)

- 24h and day-of reminders with opt-in

---

## Waitlist

- Offer waitlist when slot full; notify when space opens
- Time-limited hold for waitlist customers
- Admin queue; optional priority rules

---

## Cancellation and refunds

### Customer rules

- Full refund if cancelled far enough in advance (e.g. 7+ days)
- Partial refund in a middle window (e.g. 3–6 days)
- No refund inside short window (for example, fewer than 3 days before the event)
- Document any fees

### Business-initiated cancel

- Full refund, reschedule option, optional goodwill gesture

### Refunds

- Automatic per policy; manual override by admin; state processing time (e.g. 5–7 business days)

---

## User experience

### Mobile

- Mobile-first, touch-friendly calendar

### Booking flow

1. Party type  
2. Date / time  
3. Guest count  
4. Contact  
5. Review  
6. Pay  
7. Confirmation  

Progress indicator; optional save-and-resume.

### Help

- FAQ, optional live chat, visible support contacts, inline help text

---

## Integrations

| Area | Notes |
| --- | --- |
| Payments | Cards; optional Apple Pay / Google Pay |
| Email | SendGrid, Mailgun, SES, etc.; templated transactional mail |
| Calendar (optional) | Google / iCal / Outlook export |
| Data store | Secure booking + customer + payment records; admin audit log |

---

## Security and compliance

- Encryption in transit and at rest; PCI if handling card data
- Strong auth; optional 2FA for accounts
- Privacy policy, retention, deletion requests; GDPR if applicable
- Backups, recovery, high availability target (e.g. 99.9%+)

---

## Technical requirements

| Area | Target |
| --- | --- |
| Performance | Page load under ~3s; booking path completable in ~2 minutes |
| Concurrency | Multiple simultaneous bookings without corruption |
| Browsers | Modern Chrome, Firefox, Safari, Edge |
| Accessibility | WCAG 2.1 AA, keyboard, screen readers |

---

## Future enhancements

- Recurring parties, large groups, add-on packages, gift cards, loyalty
- Promo codes, newsletter signup, referrals
- Deeper analytics and segmentation

---

## Success metrics (KPIs)

- Booking conversion rate  
- Average booking value  
- Time to complete booking  
- Cancellation rate  
- Satisfaction scores  
- Uptime  

---

## Implementation phases

### Phase 1 — MVP

- Forms for both party types, availability display, payments, email confirmations, basic admin list/calendar, basic cancel/refund rules

### Phase 2 — Enhanced

- Accounts, history, reminders, waitlist, richer admin, reporting

### Phase 3 — Advanced

- SMS, calendar sync, marketing features, optional mobile app

---

## Notes

- Refine with business owners on pricing and policy
- Align technical design with existing stack and any legacy systems
- Treat this document as the source of truth for scope conversations until implementation tickets exist
