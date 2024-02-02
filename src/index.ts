import { User } from "./User";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const map = new CustomMap("map");

const user = new User();

map.addUserMarker(user);
