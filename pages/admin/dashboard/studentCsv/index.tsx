/* eslint-disable prettier/prettier */
import withSidebar from '@/src/hoc/with-sidebar';
import withStore from '@/src/hoc/with-store';
import withAuth from '@/src/hoc/with-auth';
import FacultyCsv from '@/src/components/admin/dashboard/facultyCsv';
const HomePageWithSidebar = withSidebar(FacultyCsv, { page: 'FacultyCsv' });
const HomePageWithAuth = withAuth(HomePageWithSidebar);
const HomePageWithStore = withStore(HomePageWithAuth);

export default HomePageWithStore;
