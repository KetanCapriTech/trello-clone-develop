/* eslint-disable prettier/prettier */
import withSidebar from '@/src/hoc/with-sidebar';
import withAuth from '@/src/hoc/with-auth';
import withStore from '@/src/hoc/with-store';
import AddFacultyForm from '@/src/components/admin/dashboard/addFaculty';
const AdminPageStudentWithSidebar = withSidebar(AddFacultyForm, { page: 'addFaculty' });
const AdminPageStudentWithAuth = withAuth(AdminPageStudentWithSidebar);
const AddStudentPage = withStore(AdminPageStudentWithAuth);

export default AddStudentPage;
