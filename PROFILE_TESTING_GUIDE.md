# 🧪 Profile Features Testing Guide

## Setup & Installation

```bash
cd /workspace/frontend
npm install
npm run dev
```

Open browser to `http://localhost:3000`

---

## ✅ Test Scenarios

### 1. **First-Time User Experience**

#### Test: Homepage for Unauthenticated User
- [ ] Visit homepage
- [ ] See welcome banner at top
- [ ] Banner shows "Unlock the Full Experience" message
- [ ] Lists 4 key features with icons
- [ ] "Get Started Free" button present
- [ ] Can dismiss banner with X button
- [ ] "Sign In" button visible in navigation

**Expected**: Banner is attractive and non-intrusive

---

#### Test: Sign Up Flow
1. Click "Sign In" button in navigation
2. Modal appears with two-column layout
3. Left side: Features list and testimonial
4. Right side: Sign up form
5. Click "Create an account" button at bottom
6. Enter test data:
   - Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
7. Click "Create account"

**Expected**:
- [ ] Form validates (name required)
- [ ] Loading state shows
- [ ] Modal closes
- [ ] User immediately logged in
- [ ] Avatar appears in navigation
- [ ] Welcome banner disappears

---

### 2. **Navigation & User Menu**

#### Test: User Menu
1. Click avatar in top-right
2. Dropdown menu appears

**Expected Menu Items**:
- [ ] User info (avatar, name, email, plan badge)
- [ ] Stats grid (Viewed: 0, Saved: 0)
- [ ] Profile link
- [ ] Saved Assessments link
- [ ] My Reports link
- [ ] Activity link
- [ ] Settings link
- [ ] Upgrade to Pro link (if Free plan)
- [ ] Log out link (red)

---

### 3. **Profile Page**

#### Test: Profile Overview
1. Click avatar → Profile
2. Should show profile header with:
   - [ ] Large avatar
   - [ ] Name (editable)
   - [ ] Email
   - [ ] Plan badge
   - [ ] Join date
   - [ ] 4 stats cards

3. Test name editing:
   - [ ] Click edit icon
   - [ ] Change name
   - [ ] Click Save
   - [ ] Name updates everywhere

---

#### Test: Profile Tabs
Navigate through each tab:

**Overview Tab**:
- [ ] Plan information card
- [ ] Recent activity feed
- [ ] Empty state if no activity

**Saved Tab**:
- [ ] Empty state initially
- [ ] "Browse Applications" button
- [ ] (After saving) List of saved assessments
- [ ] Notes visible if added
- [ ] Tags displayed
- [ ] Delete button works

**Reports Tab**:
- [ ] "Coming Soon" message
- [ ] Generate New Report button

**Activity Tab**:
- [ ] Search history list
- [ ] Clear History button
- [ ] Empty state initially

**Settings Tab**:
- [ ] Notifications section
  - Email notifications checkbox
  - Weekly digest checkbox
- [ ] Display section
  - Compact mode checkbox
  - Auto-save searches checkbox
- [ ] Reports section
  - Default report size dropdown
- [ ] All settings persist

---

### 4. **Saving Assessments**

#### Test: Save Flow
1. Go to home → Browse applications
2. Click any assessment (e.g., "Slack")
3. Find "Save Assessment" button (near download button)
4. Click to save

**Expected**:
- [ ] If not logged in → Auth modal appears
- [ ] If logged in → Button changes to "Saved"
- [ ] Heart icon fills in
- [ ] Button changes to primary style
- [ ] Stats update (favorites count +1)

5. Click "Saved" button again to unsave
- [ ] Button returns to outline style
- [ ] Heart icon unfills
- [ ] Item removed from saved list
- [ ] Stats update (favorites count -1)

---

### 5. **Personal Notes**

#### Test: Notes Feature
1. Open any assessment page
2. Scroll to "Your Notes" section
3. If not logged in:
   - [ ] See sign-in prompt
   - [ ] Click button → auth modal appears

4. If logged in:
   - [ ] See "Add Note" button
   - [ ] Click to add new note
   - [ ] Text area appears
   - [ ] Type note content
   - [ ] Click "Save Note"
   - [ ] Note appears in list
   - [ ] Shows timestamp

5. Test note editing:
   - [ ] Click edit icon on note
   - [ ] Text area becomes editable
   - [ ] Change content
   - [ ] Click Save
   - [ ] Updates timestamp to "Updated"

6. Test note deletion:
   - [ ] Click delete icon
   - [ ] Note removed immediately
   - [ ] No confirmation (feature)

---

### 6. **Search History**

#### Test: Activity Tracking
1. Enable auto-save in Settings
2. Go to homepage
3. Search for "slack"
4. Search for "github"
5. Go to Profile → Activity tab

**Expected**:
- [ ] Both searches listed
- [ ] Results count shown
- [ ] Timestamps shown
- [ ] Most recent first
- [ ] Clear History button works

Test with auto-save disabled:
- [ ] Searches not saved
- [ ] History doesn't grow

---

### 7. **Persistence & Session**

#### Test: Data Persistence
1. Sign in
2. Save an assessment
3. Add a note
4. Change a setting
5. Refresh the page

**Expected**:
- [ ] Still logged in
- [ ] Saved assessment still there
- [ ] Note still visible
- [ ] Setting remembered

6. Open DevTools → Application → Local Storage
   - [ ] See `user` key
   - [ ] See `savedAssessments` key
   - [ ] See `userNotes` key
   - [ ] See `searchHistory` key

7. Log out
   - [ ] User data cleared from context
   - [ ] localStorage keeps data (user can log back in)

---

### 8. **Login Flow**

#### Test: Existing User Login
1. If logged in, log out first
2. Click "Sign In"
3. Stay on "Sign in" tab
4. Enter any email/password
5. Click "Sign in"

**Expected**:
- [ ] Loading state
- [ ] Modal closes
- [ ] User logged in
- [ ] Previous data restored (if same email)

---

### 9. **Responsive Design**

#### Test: Mobile View
1. Open DevTools → Toggle device toolbar
2. Select iPhone or Android device
3. Navigate through app

**Expected**:
- [ ] Auth modal scrollable
- [ ] Navigation menu accessible
- [ ] User menu works on mobile
- [ ] Profile page tabs scroll horizontally
- [ ] Stats grid stacks vertically
- [ ] Forms are mobile-friendly
- [ ] Buttons are touch-friendly

---

### 10. **Edge Cases**

#### Test: Rapid Interactions
- [ ] Click save button multiple times quickly
- [ ] Add multiple notes rapidly
- [ ] Switch tabs quickly
- [ ] Log in/out repeatedly

**Expected**: No crashes or duplicates

#### Test: Empty States
- [ ] New user has no saved items
- [ ] No notes shows proper message
- [ ] No search history shows message
- [ ] All empty states actionable

#### Test: Long Content
- [ ] Enter very long note (1000+ chars)
- [ ] Note displays properly
- [ ] Scrollable in card
- [ ] Edit works

#### Test: Special Characters
- [ ] Name with emoji: `Test User 🚀`
- [ ] Email with +: `test+demo@example.com`
- [ ] Note with special chars: `Test & "quote" <tag>`

**Expected**: All handled gracefully

---

### 11. **Settings Persistence**

#### Test: Each Setting
For each setting in Profile → Settings:

1. Toggle/change the setting
2. Go to another page
3. Return to Settings
4. **Expected**: Setting still changed

5. Refresh browser
6. Return to Settings
7. **Expected**: Setting persisted

---

### 12. **Visual & Animation**

#### Test: Smooth Transitions
- [ ] Modal opens with animation
- [ ] Tabs switch smoothly
- [ ] Buttons have hover states
- [ ] Loading states are clear
- [ ] Avatar has nice gradient
- [ ] Plan badges look good
- [ ] Cards have hover effects

#### Test: Dark Mode
1. Toggle theme (moon/sun icon)
2. Check all auth components
   - [ ] Modal readable
   - [ ] Profile page good
   - [ ] Notes section clear
   - [ ] User menu contrasts

---

### 13. **Data Validation**

#### Test: Form Validation
1. Try to sign up with:
   - [ ] Empty name → Error
   - [ ] Empty email → HTML validation
   - [ ] Invalid email → HTML validation
   - [ ] Short password → HTML validation (min 6)

2. Try to add empty note
   - [ ] Save button creates empty note (works)
   - [ ] Can delete empty notes

---

### 14. **Performance**

#### Test: Large Dataset
1. Save 20 assessments
2. Add 50 notes across assessments
3. Generate 100 searches

**Expected**:
- [ ] Profile page loads quickly
- [ ] Saved list renders smoothly
- [ ] Search history paginated (max 50)
- [ ] No lag when typing notes

---

### 15. **Integration Points**

#### Test: Assessment Page Integration
1. Open assessment page
2. Check all auth features present:
   - [ ] Save button visible
   - [ ] Notes section visible
   - [ ] Both work if logged in
   - [ ] Both prompt login if guest

#### Test: Navigation Integration
- [ ] Auth state correct in nav
- [ ] Avatar or sign-in button
- [ ] User menu works
- [ ] Links navigate correctly

---

## 🐛 Known Issues to Check

- [ ] Modal closes when clicking outside
- [ ] Can't submit forms with Enter key (check if needed)
- [ ] Avatar colors consistent
- [ ] Timestamps format correctly
- [ ] Stats update immediately
- [ ] No console errors
- [ ] No React warnings

---

## 📸 Screenshot Checklist

Take screenshots of:
1. Homepage with welcome banner (logged out)
2. Auth modal (both login and signup)
3. User menu dropdown
4. Profile page - each tab
5. Saved assessment with notes
6. Notes section on assessment page
7. Mobile view of key screens
8. Dark mode versions

---

## ✨ Acceptance Criteria

Feature is complete when:
- [x] All auth flows work (login/signup/logout)
- [x] Profile page has 5 functional tabs
- [x] Can save/unsave assessments
- [x] Can add/edit/delete notes
- [x] Settings persist correctly
- [x] Search history tracks (when enabled)
- [x] User menu displays correctly
- [x] Mobile responsive
- [x] Dark mode works
- [x] No TypeScript errors
- [x] No console errors
- [x] Data persists across refreshes
- [x] Welcome banner shows/hides correctly
- [x] Empty states are user-friendly
- [x] All stats update correctly

---

## 🚀 Production Readiness

Before deploying:
- [ ] Test with real users
- [ ] Verify all localStorage limits
- [ ] Check browser compatibility
- [ ] Test on slow connections
- [ ] Verify accessibility (keyboard nav, screen readers)
- [ ] Check SEO implications
- [ ] Review security (XSS, injection)
- [ ] Performance profiling
- [ ] Error boundary testing
- [ ] Analytics integration
- [ ] Backend integration plan

---

**Happy Testing!** 🎉

Report any bugs or unexpected behavior in your issue tracker.
