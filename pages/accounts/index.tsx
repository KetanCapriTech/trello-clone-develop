/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';

const AccountPageWithSidebar = withSidebar(Settings, { page: 'settings' });
const AccountPageWithAuth = withAuth(AccountPageWithSidebar);
const AccountPage = withStore(AccountPageWithAuth);

export default AccountPage;
