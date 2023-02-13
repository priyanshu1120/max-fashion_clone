import { FaSearch } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
// import {Link} from "react-router-dom"
import "./Navbar.css";
import { ModalNavbar } from "./ModalNavbar";
import { useState, useEffect } from "react";
import { getSearch } from "../../Utils/Api";
import UpperBar from "./UpperBar";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Heading,
  SimpleGrid,
  Button,
  Stack,
  Img,
  Link,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  const [text, setText] = useState("");
  const [SearchData, setSearchData] = useState([]);
  const [pages, setPages] = useState(1);
  const [size, setSize] = useState(window.innerWidth);
  const updateSize = () => setSize(window.innerWidth);

  useEffect(() => {
    getData({ pages, text });
  }, [pages, text]);

  useEffect(() => (window.onresize = updateSize), []);

  const getData = ({ pages, text }) => {
    getSearch({
      pages,
      text,
    })
      .then((res) => res.json())
      .then((res) => {
        setSearchData(res);
        console.log(res);
      });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {size > 1024 ? <UpperBar /> : <></>}
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Box>
              <Img w="100%" h="100%" src="./images/maxlogo.png" alt ="logo"/>
            </Box>
            <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={[2,2,4,4]}
            border="1px solid red"
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={500}
              variant={"link"}
              color="black"
              href={"#"}
            >
              Sign In & signup 
            </Button>
            <Box><MdFavoriteBorder fontSize={"20px"} /></Box>
            <Box><BsHandbag fontSize={"20px"} /></Box>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>

      <Box mt="40px" w="100%">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
          {SearchData &&
            SearchData.map((item) => (
              <Box>
                <Stack>
                  <Img src={item.image} alt={item.name} h="400px" />
                  <Text fontWeight={700}>₹ {item.price}</Text>
                  <Text>{item.description}</Text>
                  <Button colorScheme="blue">Add TO Basket</Button>
                </Stack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("blue", "white");
  const popoverContentBgColor = useColorModeValue("white", "black");

  return (
    <Stack direction={"row"} spacing={4} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={"hover"} placement={"bottom-start"} >
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                // border={0}
                border = {"1px solid"}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                w={"100vw"}
                h="80vh"
              
              >
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </SimpleGrid>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Top & Tees",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];

export default Navbar;
