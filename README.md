# Matrimony Platform

## Overview

A **Matrimony Platform** is an online platform designed to help individuals find suitable marriage partners. These websites typically offer matchmaking services, where users create profiles, share personal information, and connect with others who are seeking a life partner. Matrimony websites are especially popular in cultures where arranged marriages are common, although they are widely used across the globe.

# Purpose

1. **Finding a Compatible Life Partner:** Matrimony websites aim to help individuals find a partner who aligns with their preferences, values, and life goals. By using filters such as age, religion, profession, and education, users can find people who meet their compatibility criteria, increasing the chances of a successful match.

2. **Cultural and Community-Specific Matchmaking:** Many matrimony platforms cater to specific communities, cultures, or religions (e.g., Hindu, Muslim, Christian matrimony). This allows users to find partners who share their cultural background and values, which can be essential for compatibility, especially in regions where cultural practices play an important role in marriage.

3. **Convenience and Accessibility:** Matrimony websites make it easier for people to connect with potential partners from the comfort of their homes. Users can browse profiles, initiate conversations, and evaluate matches at their own pace, saving time compared to traditional matchmaking methods.

## Technologies used

1. React

2. Express(JWT, CORS)

3. MongoDB

4. Node

## Core features

1. Authentication using firebase.

2. Add, Edit, and Read of your Biodata.

3. Filter biodata by age, division, and gender.

4. Pagination for all biodatas.

5. Get similar biodata suggestion.

6. Add biodata to favourite list.

7. Payment(Stripe) for getting contact info.

8. Post success story(Users).

9. Manage users(Admin only)
   - Make Premium
   - Make admin
   - Search users
10. Approve premium(Admin only)

11. Approve contact request(Admin only)

## Dependencies

1. Stripe
2. TanStack
3. Axios
4. Firebase
5. Sweet Alert

## Users

### Please do not modify any users.

1. Admin
   - Email: sakib@gmail.com
   - Password: 1234aA
2. General
   - Email: sabir@gmail.com
   - Password: 1234aA

## Live links

1. Live link: [visit](https://ph-b10-a12.web.app/)

## Server Repo

1. Repo: [visit](https://github.com/sakib-333/matrimony-platform-server)

## How to in local machine

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:sakib-333/matrimony-platform-client.git

   cd matrimony-platform-client
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file root of the folder and all of your secret keys.

   ```bash
   VITE_apiKey=<your-firebase-api-key>
   VITE_authDomain=<your-firebase-authDomain>
   projectId=<your-firebase-projectId>
   storageBucket=<your-firebase-storageBucket>
   messagingSenderId=<your-firebase-messagingSenderId>
   appId=<your-firebase-appId>
   VITE_URL=<your-server-base-url>


   ```

4. Start server

   ```bash
   npm run dev
   ```

5. Your server should now be running on `http://localhost:5173`.
