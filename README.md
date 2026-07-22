# Greenfield Public School ERP

A responsive school management portal for one school, designed for administration, teachers, students, and parents.

## Included portals

- Admin dashboard with fees, installments, attendance, student records, payroll, curriculum, notices, gallery, CSV import, and CSV export
- Teacher workspace with salary information, assigned students, school notices, and homework publishing
- Student and parent portal with fee balance, attendance, homework diary, marks, profile details, notices, and gallery
- Public school website with admissions, curriculum, faculty, gallery, and portal access

## Current data model

This version is a frontend prototype. Sample data and user edits are stored in the browser using local storage. Online payments, automated messaging, server accounts, and a production database are intentionally not active yet.

## Marks import

Use the downloadable CSV template from the Admin dashboard. Excel can open and save the template. Required columns are `studentId`, `term`, `subject`, `marks`, and `max`.

## GitHub Pages

The included Pages workflow publishes the site automatically whenever the main branch is updated.
