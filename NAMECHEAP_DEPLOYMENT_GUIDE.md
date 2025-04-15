# SynthetIQ Partners - Namecheap Deployment Guide

This guide provides step-by-step instructions for deploying the SynthetIQ Partners website to Namecheap shared hosting.

## Pre-Deployment Checklist

✅ Website build is generated (in the `dist` folder)
✅ `.htaccess` file is included in the `dist` folder
✅ Vite is configured with `base: '/'` for root domain deployment
✅ React Router is configured without basename

## Deployment Steps

### 1. Access Your Namecheap cPanel

1. Log in to your Namecheap account
2. Go to "My Account" > "Manage" for your domain
3. Click on "cPanel" to access the hosting control panel

### 2. Upload Website Files

#### Using File Manager:

1. In cPanel, open "File Manager"
2. Navigate to the `public_html` directory (or your desired subdirectory if not deploying to root)
3. Remove any existing files if necessary
4. Click "Upload" and select all files from your local `dist` directory
5. Alternatively, you can drag and drop files directly into the File Manager window

#### Using FTP (Alternative Method):

1. In cPanel, find "FTP Accounts" and create/view your FTP credentials
2. Use an FTP client (like FileZilla) to connect to your server
3. Upload all files from your local `dist` directory to the `public_html` directory

### 3. Verify .htaccess Configuration

1. Ensure the `.htaccess` file was properly uploaded (it may be hidden by default)
2. If you don't see it, click on "Settings" in File Manager and check "Show Hidden Files"
3. Verify the `.htaccess` file contains the proper rewrite rules for SPA routing

### 4. Test Your Website

1. Visit your domain in a web browser
2. Test navigation to different pages
3. Verify that direct URL access works (e.g., typing `yourdomain.com/about` directly)
4. Test any forms or interactive elements

## Troubleshooting

### Common Issues:

1. **404 Errors on Page Refresh**: 
   - Ensure `.htaccess` file is properly uploaded
   - Check that mod_rewrite is enabled on your server
   - Contact Namecheap support if needed

2. **Missing Assets**: 
   - Verify all files from the `dist/assets` folder were uploaded
   - Check browser console for specific errors

3. **Blank Page**: 
   - Check browser console for JavaScript errors
   - Ensure all paths in the built files are correct

### Getting Support:

If you encounter issues with your Namecheap hosting, contact their support:
- Live Chat: Available through your Namecheap account
- Support Ticket: Submit through your Namecheap account
- Knowledge Base: [https://www.namecheap.com/support/knowledgebase/](https://www.namecheap.com/support/knowledgebase/)

## Maintenance

After deployment, remember to:

1. Set up regular backups of your website files
2. Monitor website performance and uptime
3. Update your website as needed by repeating the build and upload process

## Future Updates

To update your website in the future:

1. Make changes to your local development environment
2. Run `npm run build` to generate a new build
3. Upload the new files to your Namecheap hosting, replacing the old files
