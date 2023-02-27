import { FaSearch } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
// import {Link} from "react-router-dom"
import "./Navbar.css";
import { ModalNavbar } from "./ModalNavbar";
import { useState, useEffect } from "react";
import { baseurl, getSearch } from "../../Utils/Api";
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
  useToast,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useFetch } from "../../CustomHooks/useFetch";

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
              <Img w="100%" h="100%" src="./images/maxlogo.png" alt="logo" />
            </Box>
            <Flex display={{ base: "none", md: "flex" }} ml={10} align="center">
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={[2, 2, 4, 4]}
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
            <Box>
              <MdFavoriteBorder fontSize={"20px"} />
            </Box>
            <Box>
              <BsHandbag fontSize={"20px"} />
            </Box>
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

// <========================DesktopNav==========================================>
const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "gray.200");
  const linkHoverColor = useColorModeValue("blue", "white");
  const popoverContentBgColor = useColorModeValue("white", "black");
  const [gender, setGender] = useState("");
  const handleover = (item) => {
    setGender(item);
  };
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box onMouseOver={() => handleover(navItem.label)}>
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
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                w={"100vw"}
              >
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={1}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      {...child}
                      gender={gender}
                    />
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

// <======================== DesktopNav subnav==========================================>
const DesktopSubNav = ({ label, href, subLabel, gender }) => {
  const [limit, setLimit] = useState(10);
  const [text, setText] = useState("");
  const toast = useToast();

  let url = baseurl;
  if (text.length > 0) {
    url = `${baseurl}/${gender}?category=${text}&limit=${limit}`;
  }
  const { data, loading, getData, error } = useFetch();
  const handleClick = (el) => {
    setText(el.toLowerCase());
  };
  useEffect(() => {
    getData(url);
    console.log(url, data);
  }, [text]);

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
          <Box fontSize={"sm"}>
            {subLabel.map((el, i) => (
              <Box
                _hover={{ color: "blue" }}
                key={i}
                onClick={() => handleClick(el)}
              >
                {el}
              </Box>
            ))}
          </Box>
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

// <======================== MobileNav ==========================================>

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

// <=======================  MobileNavItem ==========================================>

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
    label: "women",
    children: [
      {
        gender: "women",
        label: "Top & Tees",
        subLabel: [
          "T-shirt",
          "Tops & tees",
          "Shirt",
          "Tunics",
          "Shurgs",
          "Zodiac Tees",
          "Curves",
        ],
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: [
          "Jeans & Jaggings",
          "Trousers",
          "Capris",
          "Shorts & Skirts",
          "Leggings",
          "Fashion Bootoms Curves",
        ],
        href: "#",
      },
      {
        label: "Dresses & Jumpsuits",
        subLabel: ["Dresses", "Jumpsuits", "Curves (Plus Size)"],
        href: "#",
      },
      {
        label: "Sleepwear",
        subLabel: ["Dresses", "Sets", "Tops", "Bottoms", "Curves(Plus Size)"],
        href: "#",
      },
      {
        label: "Indian Wear",
        subLabel: [
          "Kurtas & Kurtis",
          "Tops",
          "Dresses",
          "Suits & sets",
          "Plazzo",
          "Salwar & Patialas",
          "Skirts",
        ],
        href: "#",
      },
      {
        label: "Sportwear",
        subLabel: [
          "Topwear",
          "Tops&tees",
          "Trackpants",
          "Shorts",
          "Sport Bra",
          "Curves(Plus Size)",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: ["Dresses", "Sets", "Tops", "Bottoms", "Curves(Plus Size)"],
        href: "#",
      },
      {
        label: "Winterwear",
        subLabel: [
          "Sweatshirts & Hoddies",
          "Sweters & Cardigans",
          "Jackets",
          "Accessories",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "mens",
    children: [
      {
        gender: "mens",
        label: "Topwear",
        subLabel: ["T-shirt", "Polos", "Casual Shirts", "Formal Shirts"],
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: ["Jeans", "Trousers", "Capris", "Shorts & 3/4 ths"],
        href: "#",
      },
      {
        label: "Sportswear",
        subLabel: ["Tees & Polos", "Trackpants & Joggers", "Shorts & 3/4 ths"],
        href: "#",
      },
      {
        label: "Loungewear",
        subLabel: ["Tees", "Sets", "Bottoms"],
        href: "#",
      },
      {
        label: "Indian Wear",
        subLabel: ["Kurtas", "Jackets"],
        href: "#",
      },
      {
        label: "Innerwear",
        subLabel: ["Vests", "Briefs", "Boxers"],
        href: "#",
      },
      {
        label: "Accessories",
        subLabel: [
          "Face Masks",
          "Bags",
          "Belts",
          "Caps",
          "Wallets",
          "Socks",
          "Handkerchifes",
          "Neck Ties",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: ["Casual shoes", "Sports shoes", "Sanda;s & Flip Flops"],
        href: "#",
      },
      {
        label: "Winterwear",
        subLabel: ["Sweatshirts & Hoddies"],
        href: "#",
      },
      {
        label: "Online Exclusives",
        subLabel: ["Tops", "Sports Wear", "Bottoms", "Loungewear", "Shoes"],
        href: "#",
      },
    ],
  },
  {
    label: "Boys",
    children: [
      {
        gender: "boys",
        label: "Topwear",
        subLabel: ["Shirts", "Polos"],
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: [
          "Jeans",
          "Trousers",
          "Track Pants & Joggers",
          "Shorts & 3/4 ths",
        ],
        href: "#",
      },
      {
        label: "Essentials",
        subLabel: ["Infant Besics", "Innerwear", "Sleepwear"],
        href: "#",
      },
      {
        label: "Accessories",
        subLabel: [
          "Face Masks",
          "Bags",
          "Caps",
          "Socks",
          "Back to School",
          "Soft Toys",
        ],
        href: "#",
      },
      {
        label: "Indian Wear",
        subLabel: ["Sets", "Jackets"],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: ["Casual Shoes", "Boots", "Sandals & Flip Flops"],
        href: "#",
      },
      {
        label: "Baby Boy(0-2 yrs)",
        subLabel: [
          "Bodysuits & Sleepsuits",
          "Clothing Sets",
          "Gift Sets",
          "Tees ^ Polos",
          "Shorts",
          "Jeans & Trousers",
          "Winterwear",
          "Accessories",
        ],
        href: "#",
      },
      {
        label: "Winterwear",
        subLabel: [
          "Sweatshirts & Hoddies",
          "Sweaters & Cardigans",
          "Jackets",
          "Accessories",
        ],
        href: "#",
      },
      {
        label: "Online Exclusives",
        subLabel: [
          "Tops",
          "Baby Boys",
          "Bottoms",
          "Accessories",
          "Shoes",
          "Essentials",
        ],
        href: "#",
      },
    ],
  },
  {
    label: "Girls",
    children: [
      {
        gender: "girls",
        label: "Topwear",
        subLabel: ["Top & Tees", "Shirts"],
        href: "#",
      },
      {
        label: "Bottomwear",
        subLabel: [
          "Jeans & Jeggings",
          "Trousers",
          "Shorts & Skirts",
          "Leggings",
          "Track Pants & Joggers",
        ],
        href: "#",
      },
      {
        label: "Essentials",
        subLabel: ["Infant Besics", "Innerwear", "Sleepwear"],
        href: "#",
      },
      {
        label: "Accessories",
        subLabel: [
          "Face Masks",
          "Bags",
          "Sunglasses",
          "Caps",
          "Socks",
          "Hair Accessories",
          "Back to School",
          "Soft Toys",
        ],
        href: "#",
      },
      {
        label: "Indian Wear",
        subLabel: ["Dresses & Kurtas", "Sets"],
        href: "#",
      },
      {
        label: "Baby Girl(0-2 yrs)",
        subLabel: [
          "Bodysuits & Sleepsuits",
          "Clothing & Sets",
          "Gift Sets",
          "Tops & Tees",
          "Dresses",
          "Pyjamas & Leggings",
          "Shorts & Skirts",
          "Jeans & Trousers",
          "Winterwear",
          "Accessories",
        ],
        href: "#",
      },
      {
        label: "Footwear",
        subLabel: ["Ballerinas", "Sandals & Flip Flops", "Casual Shoes"],
        href: "#",
      },
      {
        label: "Winterwear",
        subLabel: [
          "Sweatshirts & Hoddies",
          "Sweters & Cardigans",
          "Jackets",
          "Accessories",
        ],
        href: "#",
      },
      {
        label: "Online Exclusives",
        subLabel: [
          "Tops",
          "Dresses",
          "Bottoms",
          "Baby Girls",
          "Essentials",
          "Shoes",
          "Indian Wear",
        ],
        href: "#",
      },
    ],
  },
];

export default Navbar;
