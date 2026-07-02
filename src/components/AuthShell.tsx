import { AuthProvider, LoginButton, UserAvatar } from '@achimismaili/easy-web-auth';
import type { AuthConfig } from '@achimismaili/easy-web-auth';

interface AuthShellProps {
  config: AuthConfig;
}

/**
 * Single Astro island for all auth-dependent UI in the site header.
 * Must be rendered with client:only="react" in Astro layouts.
 * React context does NOT cross island boundaries — all auth UI must live inside here.
 */
export default function AuthShell({ config }: AuthShellProps) {
  return (
    <AuthProvider config={config}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <UserAvatar size={28} />
        <LoginButton />
      </div>
    </AuthProvider>
  );
}
