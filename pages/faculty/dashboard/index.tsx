/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';

const FacultyPageWithSidebar = withSidebar(Settings, { page: 'settings' });
const FacultyPageWithAuth = withAuth(FacultyPageWithSidebar);
const FacultyPage = withStore(FacultyPageWithAuth);

export default FacultyPage;
