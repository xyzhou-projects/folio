# Supabase Setup Guide

## Local Development Environment

1. **Prerequisites**

   - Install Supabase CLI: `brew install supabase/tap/supabase`
   - Docker Desktop installed and running
   - Node.js/pnpm installed

2. **Initial Setup**

   ```bash
   # Initialize Supabase
   supabase init

   # Start local services
   supabase start
   ```

3. **Environment Setup**

   - Copy `.env.example` to `.env.local`
   - Update with local credentials from `supabase start` output

   ```env
   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-local-anon-key]
   ```

4. **Testing Connection**
   - Visit: http://localhost:3000/test
   - Check browser console for connection status
   - Access Supabase Studio: http://localhost:54323

## Production Environment

1. **Environment Setup**

   - Use `.env.production` for production credentials
   - Never commit this file to git

2. **Switching Environments**
   - Local development uses `.env.local`
   - Production build uses `.env.production`

## Useful Commands

Start local services

```bash
supabase start
```

Stop local services

```
supabase stop
```

Check status

```
supabase status
```
