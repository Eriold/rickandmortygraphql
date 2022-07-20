import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { MortyFace } from "../../../assets/svg";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 40px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image src={MortyFace} alt="Morty face" width={70} height={70} />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            R
          </Text>
          <Text color="white" h3>
            ick and
          </Text>
          <Text color="white" h2 style={{ paddingLeft: "4px" }}>
            M
          </Text>
          <Text color="white" h3>
            orty
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
