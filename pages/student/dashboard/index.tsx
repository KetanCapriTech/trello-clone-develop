/* eslint-disable prettier/prettier */
import Settings from '@/src/components/settings';
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';

const StudentPageWithSidebar = withSidebar(Settings, { page: 'settings' });
const StudentPageWithAuth = withAuth(StudentPageWithSidebar);
const StudentPage = withStore(StudentPageWithAuth);

export default StudentPage;
