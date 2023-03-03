import React, { Component } from 'react';
import { Box, Button } from '@chakra-ui/react';
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineCreditCard,
  AiOutlineBuild,
  AiFillAlipaySquare,
  AiTwotoneProfile,
  AiFillProject,
  AiOutlineCheck,
  AiFillBook,
  AiFillContainer,
  AiFillInteraction,
  AiFillFlag
} from 'react-icons/ai';
import Link from 'next/link';
import NavBar from '@/src/components/navbar';

const withSidebar = (App, props) => {
  return class BoardWithSidebar extends Component {
    constructor(props) {
      super(props);
    }

    static async getInitialProps(ctx) {
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      return {
        ...appProps
      };
    }

    render() {
      const { page } = props;

      const sidebarMenu = [
        { path: '/home', buttonName: 'Home', page: 'home', icon: AiOutlineHome },
        // { path: '/timeSheet', buttonName: 'timeSheet', page: 'timeSheet', icon: AiOutlineSetting },
        // {
        //   path: '/task-assignment',
        //   buttonName: 'Task-assignment',
        //   page: 'task-assignment',
        //   icon: AiFillAlipaySquare
        // },
        // {
        //   path: '/accounts',
        //   buttonName: 'Accounts',
        //   page: 'Accounts',
        //   icon: AiTwotoneProfile
        // },
        // {
        //   path: '/project',
        //   buttonName: 'Project',
        //   page: 'project',
        //   icon: AiFillProject
        // },
        // {
        //   path: '/check-list',
        //   buttonName: 'Check-List',
        //   page: 'check-list',
        //   icon: AiOutlineCheck
        // },
        // {
        //   path: '/carrers',
        //   buttonName: 'Carrers',
        //   page: 'carrers',
        //   icon: AiFillBook
        // },
        // {
        //   path: '/employeeLeaves',
        //   buttonName: 'Employee Leaves',
        //   page: 'employeeLeaves',
        //   icon: AiFillContainer
        // },
        // {
        //   path: '/performance',
        //   buttonName: 'Performance',
        //   page: 'performance',
        //   icon: AiFillInteraction
        // },
        // {
        //   path: '/others',
        //   buttonName: 'Others',
        //   page: 'others',
        //   icon: AiFillFlag
        // },
        {
          path: '/admin/dashboard/student',
          buttonName: 'Students',
          page: 'Students',
          icon: AiFillFlag
        },

        { path: '/boards', buttonName: 'Boards', page: 'boards', icon: AiOutlineCreditCard },
        { path: '/templates', buttonName: 'Templates', page: 'templates', icon: AiOutlineBuild }
      ];

      return (
        <>
          <NavBar bg="white" />
          <Box display="flex" mt="2%">
            <Box height="110vh" width="20vw" boxShadow="base" rounded="lg" p="1em" ml="20px">
              <Box display="flex" flexDirection="column">
                {sidebarMenu.map((menu, index) => (
                  <Link href={menu.path} key={index}>
                    <Button
                      mt="5px"
                      mb="5px"
                      height="3rem"
                      borderRadius="1rem"
                      boxShadow={page === menu.page ? 'inner' : 'base'}
                      display="flex"
                      justifyContent="left"
                      colorScheme="gray">
                      <>
                        <menu.icon size="20px" /> &nbsp; {menu.buttonName}
                      </>
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
            <App />
          </Box>
        </>
      );
    }
  };
};

export default withSidebar;
