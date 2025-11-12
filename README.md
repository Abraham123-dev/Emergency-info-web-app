# 🚨 Emergency Info Web App

A responsive web application designed to help users store, manage, and quickly access emergency contacts and critical safety information in one secure place.

## 📋 Features

### Emergency Contacts Management
- **Add Contacts**: Save emergency contact details with name, phone, category, and notes
- **View Contacts**: See all saved contacts organized in a responsive list
- **Edit Contacts**: Update contact information at any time
- **Delete Contacts**: Remove contacts when no longer needed
- **Call Button**: Directly dial contacts from mobile devices
- **Local Storage**: All data is saved locally on your device (no server required)
- **Empty State**: Shows helpful "No Contacts Yet" message when list is empty

### Emergency Guidelines
- **Step-by-Step Guides**: Access detailed procedures for common emergencies:
  - ❤️ CPR (Cardiopulmonary Resuscitation)
  - 🔥 Fire Emergency
  - 🌪️ Severe Weather (Tornado)
  - 🩹 Severe Bleeding & First Aid
- **Expandable Instructions**: Click to expand/collapse detailed steps for each emergency
- **Smooth Animations**: Visual feedback when expanding/collapsing guides

### Responsive Design
- **Mobile-First**: Optimized for phones (480px), tablets (768px), and desktops
- **Touch-Friendly**: Large buttons and tap targets for easy mobile use
- **Dark Theme**: Professional dark background with smooth transitions
- **Fast Loading**: No dependencies, lightweight and instant loading

## 🎯 Key Pages

### 1. **Home Page** (`index.html`)
- Welcome screen with app overview
- Quick cards linking to Emergency Contacts and Emergency Guides
- Feature highlights (Saved Locally, Secure, Instant Access)
- Smooth animations and gradient background

### 2. **Emergency Contacts** (`emergency-contacts.html`)
- View all saved emergency contacts with full details
- Edit or delete existing contacts inline
- Add new contacts via button link
- Contact counter showing number of saved contacts
- Shows default state when no contacts are saved
- Responsive layout that stacks on mobile

### 3. **Add/Edit Contacts** (`add-contact.html`)
- Clean form to save new emergency contacts
- Required fields: Name, Phone Number, Category
- Optional field: Notes/additional information
- Categories: Family, Medical, Friends, Work, Emergency Services, Other
- Black-background dropdown with smooth transitions
- Success toast notification on save
- Automatic redirect to contacts page

### 4. **Emergency Guidelines** (`guidelines.html`)
- Collapsible guide cards for different emergencies
- Each guide has emoji icon, title, and step-by-step instructions
- Click to expand/collapse with smooth arrow rotation
- Category badges for quick reference

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive design with media queries, animations, and gradients
- **JavaScript (Vanilla)**: No frameworks, lightweight and fast
- **LocalStorage API**: Client-side data persistence
- **SVG**: Custom dropdown arrow with smooth styling

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with multi-column grids
- **Tablet (768px)**: Stacked layouts, adjusted spacing
- **Mobile (480px)**: Single column, compact buttons, optimized text sizes

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No installation or dependencies required!

### Quick Start
```bash
# Simply open in browser - no build step needed
start index.html  # Windows
open index.html   # Mac
xdg-open index.html  # Linux
```

## 📖 Usage Guide

### Adding a Contact
1. Click **"➕ Add Emergency Contact"** button from home page
2. Fill in contact details:
   - **Name**: Contact person's name (required)
   - **Phone**: Phone number - clickable to call on mobile (required)
   - **Category**: Select appropriate category (required)
   - **Notes**: Optional additional information
3. Click **"💾 Save Contact"**
4. See success notification and redirect to contacts page

### Managing Contacts
- **View**: All contacts displayed with name, phone, category, and notes
- **Edit**: Click **"Edit"** button on any contact to modify details
- **Call**: Click phone number or **"Call"** button to dial directly on mobile
- **Delete**: Click **"Delete"** button and confirm to remove contact

#### Contact Counter
- Displays total number of saved contacts
- Shows "No Contacts Yet" message when list is empty
- Automatically updates when contacts are added/removed/edited

### Viewing Emergency Guidelines
1. Click **"📘 Emergency Guidelines"** from home page or navigation
2. Browse available emergency guides
3. Click on any guide card to expand step-by-step instructions
4. Click again to collapse
5. Each guide includes:
   - Emoji icon for quick visual identification
   - Category/type of emergency
   - Numbered steps with detailed instructions

## 💾 Data Storage & Privacy

### Local Storage Benefits
- ✅ All data saved locally in browser
- ✅ No data sent to external servers
- ✅ Works offline (no internet required)
- ✅ Instant access to contacts

### Data Management
- Data persists even after closing browser/tab
- Stored only on your device
- Clear browser data/cache to reset the app
- **Backup Tip**: Periodically screenshot or note important contacts

### Security Notes
- ⚠️ Data is stored in browser - accessible to anyone with device access
- ⚠️ Not recommended for shared devices without device password protection
- ⚠️ Clearing browser cache will delete all saved contacts

## 🎨 Customization

### Edit Colors & Styling
- **Main styling**: Edit `style.css`
- **Emergency contacts page**: Edit `emergency.css`
- **Variables**: Colors, fonts, sizes defined at top of CSS files

### Modify Emergency Guidelines
Edit the `guides` array in `app.js` to:
- Add new emergency procedures
- Modify existing guides
- Change emoji icons
- Update categories

### Add Contact Categories
Modify the `<select>` options in `add-contact.html`:
```html
<option value="custom">Custom Category</option>
```

## 📊 File Structure

```
Emergency-info-web-app/
├── index.html                  # Home page with quick links
├── emergency-contacts.html     # View, edit, delete contacts
├── add-contact.html            # Add/edit contact form
├── guidelines.html             # Emergency procedures
├── app.js                       # Core application logic
├── style.css                   # Main styling (home, add-contact)
├── emergency.css               # Emergency contacts & guidelines styling
└── README.md                   # Documentation (this file)
```

### Key JavaScript Functions
- `saveContact(e)` - Saves new contact to LocalStorage
- `loadContacts()` - Loads and displays all contacts
- `editContact(index)` - Switches contact to edit mode
- `saveEdit(e, index)` - Saves edited contact
- `deleteContact(index)` - Removes contact with confirmation
- `toggleSteps(i)` - Expands/collapses emergency guide steps
- `updateBoxContainer()` - Shows/hides empty state message

## 🌐 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## 🐛 Troubleshooting

### Contacts Not Saving
- **Check**: Verify LocalStorage is enabled in browser settings
- **Try**: Clear browser cache and reload the page
- **Debug**: Open DevTools (F12) and check Console tab for errors

### Styles Not Loading
- **Check**: Ensure CSS files are in same directory as HTML files
- **Verify**: File paths in `<link>` tags match actual file names
- **Note**: File names are case-sensitive on some systems

### Contact Not Showing
- **Check**: Refresh the page (Ctrl+R / Cmd+R)
- **Verify**: Check "No Contacts Yet" message if list appears empty
- **Debug**: Open DevTools → Application → LocalStorage to inspect data

### Mobile Call Button Not Working
- **Note**: "Call" feature only works on devices with phone capabilities
- **Alternative**: Long-press phone number to see call options
- **Workaround**: Manually copy and paste phone number to your phone app

## 📈 Planned Enhancements

- 📤 Export contacts to CSV/PDF format
- 📥 Import contacts from file
- ☁️ Optional cloud sync across devices
- 🔔 Emergency alert notifications
- 👥 Multiple user profiles
- 🌓 Dark/light theme toggle
- 🔴 Emergency SOS button
- 📍 Location sharing
- 🌐 Progressive Web App (PWA) support

## 🔒 Security & Privacy

- **No Server Communication**: All data stays on your device
- **No Tracking**: No analytics or telemetry
- **Open Source**: Code is transparent and auditable
- **Browser Standard**: Uses only standard browser APIs

## 📝 License

This project is open source. Feel free to use, modify, and distribute.

## 🙏 Support & Feedback

If you encounter issues or have suggestions:

1. **Check Troubleshooting** section above
2. **Inspect Console** (F12 → Console tab) for error messages
3. **Test Different Browser** to isolate issues
4. **Verify File Structure** - all files in same directory

---

**Stay Safe! Keep Your Emergency Contacts Ready! 🚨**

*Last Updated: November 2025*
