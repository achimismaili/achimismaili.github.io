import { AuthProvider, LoginButton, UserAvatar, ProtectedContent } from '@achimismaili/easy-web-auth';
import type { AuthConfig } from '@achimismaili/easy-web-auth';

export default function AuthDemoIsland({ config }: { config: AuthConfig }) {
  return (
    <AuthProvider config={config}>
      <div style={{ padding: '1.5rem', border: '1px solid var(--ew-border, #e5e7eb)', borderRadius: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <UserAvatar size={40} />
          <LoginButton />
        </div>
        <ProtectedContent>
          <div style={{ background: 'var(--ew-surface, #f9fafb)', padding: '1rem', borderRadius: '0.375rem' }}>
            <p>✅ Du bist eingeloggt! Hier würde SharePoint-Inhalt erscheinen.</p>
          </div>
        </ProtectedContent>
      </div>
    </AuthProvider>
  );
}
