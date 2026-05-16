import * as dotenv from 'https://cdn.jsdelivr.net/npm/dotenv@16.1.4/+esm';
await dotenv.config();
        // ── Supabase config ──────────────────────────────────────────────
        const SUPABASE_URL      = process.env.SUPABASE_PUBLIC_URL;
        const SUPABASE_ANON_KEY = process.env.SUPABASE_PUBLIC_KEY; 
        // ─────────────────────────────────────────────────────────────────

        const configMissing =
            SUPABASE_URL === 'YOUR_SUPABASE_URL' ||
            SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY';

        // DOM references
        const authBanner      = document.getElementById('authBanner');
        const loginSection    = document.getElementById('loginSection');
        const profileSection  = document.getElementById('profileSection');
        const headerAuthArea  = document.getElementById('headerAuthArea');
        const loginForm       = document.getElementById('loginForm');
        const loginError      = document.getElementById('loginError');
        const logoutBtn       = document.getElementById('logoutBtn');
        const userEmailEl     = document.getElementById('userEmail');
        const accountEmailEl  = document.getElementById('accountEmail');
        const profileForm     = document.getElementById('profileForm');
        const profileFeedback = document.getElementById('profileFeedback');

        function showBanner(message, type = 'info') {
            // Build banner with a close (✕) button
            authBanner.innerHTML = '';
            const text = document.createElement('span');
            text.textContent = message;
            const closeBtn = document.createElement('button');
            closeBtn.className  = 'banner-close';
            closeBtn.type       = 'button';
            closeBtn.setAttribute('aria-label', 'Dismiss');
            closeBtn.textContent = '✕';
            closeBtn.addEventListener('click', () => { authBanner.hidden = true; });
            authBanner.appendChild(text);
            authBanner.appendChild(closeBtn);
            authBanner.className = `auth-banner auth-banner-${type}`;
            authBanner.hidden = false;
        }

        function hideBanner() {
            authBanner.hidden = true;
        }

        function showLoginState() {
            loginSection.hidden  = false;
            profileSection.hidden = true;
            // No Sign In button in the header — the form below is sufficient
            headerAuthArea.innerHTML = '';
        }

        function showProfileState(user) {
            loginSection.hidden  = true;
            profileSection.hidden = false;
            if (userEmailEl) userEmailEl.textContent = `Signed in as: ${user.email}`;
            if (accountEmailEl) accountEmailEl.value = user.email || '';
            headerAuthArea.innerHTML = `<span class="header-user-email">${user.email}</span>`;
        }

        if (configMissing) {
            showBanner(
                '⚙️  This is currently in development. To view updates, visit Github.', 'warning'
            );
            // Sign-in screen is temporarily disabled; login section stays hidden
        } else {
            // Dynamically import supabase-js from CDN
            const { createClient } = await import(
                'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
            );

            const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

            // ── Check initial session ──────────────────────────────────
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                showProfileState(session.user);
            } else {
                showLoginState();
            }

            // ── Listen for auth changes ────────────────────────────────
            supabase.auth.onAuthStateChange((_event, session) => {
                if (session) {
                    hideBanner();
                    showProfileState(session.user);
                } else {
                    showLoginState();
                }
            });

            // ── Login form ─────────────────────────────────────────────
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const email    = document.getElementById('loginEmail').value.trim();
                const password = document.getElementById('loginPassword').value;

                loginError.hidden = true;
                const submitBtn = loginForm.querySelector('input[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.value = 'Signing in…';

                const { error } = await supabase.auth.signInWithPassword({ email, password });

                submitBtn.disabled = false;
                submitBtn.value = 'Sign In';

                if (error) {
                    loginError.textContent = error.message;
                    loginError.hidden = false;
                }
            });

            // ── Logout ─────────────────────────────────────────────────
            logoutBtn.addEventListener('click', async () => {
                logoutBtn.disabled = true;
                logoutBtn.textContent = 'Signing out…';
                await supabase.auth.signOut();
                logoutBtn.disabled = false;
                logoutBtn.textContent = 'Sign Out';
            });

            // ── Update profile ─────────────────────────────────────────
            profileForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                profileFeedback.hidden = true;

                const newEmail    = accountEmailEl.value.trim();
                const newPassword = document.getElementById('accountPassword').value;
                const currentUser = (await supabase.auth.getUser()).data.user;
                const updates = {};
                // Only include email if it has changed
                if (newEmail && currentUser && newEmail !== currentUser.email) updates.email = newEmail;
                if (newPassword) updates.password = newPassword;

                if (Object.keys(updates).length === 0) return;

                const { error } = await supabase.auth.updateUser(updates);
                profileFeedback.hidden = false;
                if (error) {
                    profileFeedback.textContent = error.message;
                    profileFeedback.className = 'form-feedback form-feedback-error';
                } else {
                    profileFeedback.textContent = 'Profile updated successfully.';
                    profileFeedback.className = 'form-feedback form-feedback-success';
                    document.getElementById('accountPassword').value = '';
                }
            });
        }