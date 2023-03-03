/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';

const AdminPageWithSidebar = withSidebar(Settings, { page: 'settings' });
const AdminPageWithAuth = withAuth(AdminPageWithSidebar);
const AdminPage = withStore(AdminPageWithAuth);

export default AdminPage;
