# Daily Updates Guide

This guide describes how to update the content on the CareerOrbit website daily.

## Updating Job Listings

1.  **Locate Data File:**
    - Open `client/src/lib/mockData.ts`.
    - This file contains the arrays for job listings and company data.

2.  **Add New Job:**
    - Find the `JOBS` array.
    - Add a new object to the beginning of the array.
    - **Format:**
    ```typescript
    {
      id: "unique-id-202X", // Use a unique ID
      title: "Role Title",
      company: "Company Name",
      location: "City, Country",
      type: "Full-time / Internship",
      posted: "2 hours ago", // or "Today"
      deadline: "Apply by Date",
      description: "Brief description...",
      skills: ["Skill 1", "Skill 2"],
      link: "https://apply-link.com",
      logo: "https://logo-url.com/image.png"
    },
    ```

3.  **Remove Expired Jobs:**
    - Remove or comment out jobs that are no longer active to keep the list fresh.

## Updating Stats

1.  **Locate Stats:**
    - In `client/src/lib/mockData.ts`, find the `STATS` array.
2.  **Update Values:**
    - Update `value` fields (e.g., "Active Jobs", "Daily Updates") to reflect current numbers.

## Updating Placement Guides

1.  **File:** `client/src/pages/PlacementGuides.tsx`
2.  **Add Company:**
    - Add a new object to the `COMPANIES` array.
    - **Format:**
    ```typescript
    {
      name: "Company Name",
      role: "Role Name",
      type: "Product / Service Based",
      difficulty: "Easy / Medium / Hard",
      topics: ["Topic 1", "Topic 2"],
      logo: "Initial" // First letter of company
    }
    ```

## Deploying Changes

After making changes:

1.  **Commit & Push:**
    ```bash
    git add .
    git commit -m "daily update: added new jobs"
    git push origin main
    ```
2.  **Automatic Deployment:**
    - If connected to Vercel, this will trigger a new build automatically.
