import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import ICard from "../components/ICard";
import TextInput from "../components/SearchBar/TextInput";
import styles from "./Home.module.scss";
import TagInput from "../components/SearchBar/TagInput";
import SearchButton from "../components/SearchButton";
import { useState } from "react";
import {
  getInternshipsByTag,
  getInternshipsByTitle,
} from "../firebase/actions/dbActions";
import InternshipDetails from "../components/DetailCard/InternshipDetails";
import LaptopImg from "../images/laptop.jpg";

const sampleCards = [
  {
    title: "Programming",
    date: "January 8, 2023",
    type: "Full time",
    img: LaptopImg,
    city: "Addis Ababa",
  },
  {
    title: "Graphics Design",
    date: "January 8, 2023",
    type: "Part time",
    img: LaptopImg,
    city: "Adama",
  },
  {
    title: "Content Writing",
    date: "January 8, 2023",
    type: "Full time",
    city: "BahirDar",
  },
  {
    title: "Graphics Design",
    date: "January 8, 2023",
    type: "Part time",
    img: LaptopImg,
    city: "Hawassa",
  },
];

const Home = () => {
  const [textInput, setTextInput] = useState("");
  const [tagInputs, setTagInputs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const dummyImageUrl =
    "https://w7.pngwing.com/pngs/628/58/png-transparent-google-logo-google-search-google-now-google-text-trademark-service-thumbnail.png";
  const dummyTitle = "Python Developers";
  const dummyCompany = "Google";
  const dummyDescription =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae molestias modi doloribus, minima quo mollitia dolor expedita ducimus? Earum, natus laudantium fugit rerum, aliquid ad aut eligendi atque, voluptas debitis cupiditate et officia repellendus odit minima quod. Ex odio illum rerum consequuntur eaque ad perferendis odit reiciendis asperiores ea porro voluptatum similique maiores totam suscipit, pariatur natus illo dolores, laborum quibusdam. Quos porro et neque dolor, eum assumenda temporibus nesciunt quam consequatur sequi exercitationem laborum, inventore incidunt, quibusdam sunt magni dolorem sed accusamus harum quidem obcaecati doloremque. Maxime consequatur molestiae molestias voluptatum, obcaecati fugiat in officia soluta rerum accusamus voluptas odit totam cupiditate consequuntur possimus sed magni recusandae doloremque, et eaque facere hic? Expedita inventore ipsam labore id eaque enim rem molestiae, natus consequuntur dolorem molestias illo repellat quam, earum accusamus, impedit necessitatibus sed velit suscipit perspiciatis? Blanditiis nulla sint reprehenderit debitis iure voluptas consequatur ab, ad odio sunt ducimus temporibus suscipit quisquam dolorem vitae nemo excepturi ex, animi, ipsa illum sit impedit. Ab quisquam deserunt dignissimos porro consectetur unde nisi facere voluptatem. Voluptates, rerum veniam ducimus numquam, in consequuntur enim corporis reiciendis vero deserunt iste consequatur amet earum esse magnam ipsa optio sed odio voluptas omnis necessitatibus officia! Iure impedit excepturi at dolorum assumenda sunt rerum earum repellat, quaerat consectetur natus consequuntur officia suscipit corrupti voluptate. Vel, harum dolores asperiores doloribus, velit nihil molestias, labore itaque atque ipsam quos eius laudantium nam omnis! Placeat sint iste deleniti error vitae beatae fugit. Soluta dolor magni provident illo architecto commodi iure tempore itaque mollitia, reiciendis, eum quam ratione? Provident, ipsum iusto sint hic, quia quisquam neque tempora perspiciatis amet harum temporibus molestias. Rem, quaerat. Magnam optio error molestias ipsa, ratione necessitatibus, voluptates et culpa nam odit assumenda, omnis quidem praesentium. Neque ab saepe voluptas beatae autem architecto dolore ad nulla possimus perferendis, facere sunt recusandae. Ullam, ut rem! Aspernatur molestiae laudantium similique hic quisquam architecto dignissimos, ipsam omnis est debitis aliquid dolor expedita earum, ad odit saepe recusandae modi laborum repudiandae inventore harum ut officiis totam? Culpa quia labore alias eum, odit sequi inventore quasi voluptatibus quidem ducimus sint obcaecati enim pariatur eveniet rem incidunt sapiente aut excepturi ratione voluptatum minus, similique perferendis sunt! Alias, ipsam vero dolorem debitis fuga rerum ut sit tempora, possimus quas nulla quaerat deserunt sed sequi. Corrupti corporis at, enim nemo perspiciatis laboriosam ducimus in vel reiciendis dolor pariatur! Quidem voluptate asperiores natus distinctio odio, praesentium debitis doloremque totam nemo harum veritatis accusamus fuga minima, quam, quisquam recusandae iste. Veritatis sunt tempora obcaecati fuga ipsa consectetur repellat laborum libero dicta facilis nobis, quam ad quos. Quam similique, assumenda beatae culpa autem non asperiores expedita, doloribus placeat optio quisquam eligendi sunt consectetur! Soluta harum odit nesciunt, quasi culpa laborum, iusto beatae ipsam sint error nam possimus perspiciatis exercitationem non ad officia sapiente fugit. Incidunt ipsum magni quos perferendis error vero. Rem, amet. Quasi aspernatur dolore itaque impedit quaerat, accusamus maiores ab quae sequi at? Odio quas, earum mollitia ratione libero aut facilis fugit voluptatem aperiam enim Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque quam optio! Magnam, possimus. Accusantium, perspiciatis doloribus neque inventore a maiores explicabo, eaque magni, tempore impedit officiis! Sit similique ratione quo nisi molestias ab cupiditate nulla error nostrum obcaecati consequuntur laboriosam magni eos, adipisci illo dolor pariatur laudantium ex illum ad ea? Enim reprehenderit culpa dignissimos quos neque aspernatur sapiente amet, ipsa ut iure et? Dicta non tenetur, odio in incidunt impedit consequatur ratione blanditiis debitis amet illum reprehenderit minima cupiditate placeat! Eius neque assumenda dicta quam perspiciatis. Id incidunt officiis ex fugit enim quibusdam corrupti mollitia quisquam hic repudiandae. ";
  const dummyLocation = "Addis Ababa";
  const dummyTimeAgo = "2 days ago";
  const dummyStatus = "Open";

  const searchHandler = () => {
    getInternshipsByTitle(textInput).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
      console.log(results);
    });
    if (tagInputs.length === 0) return;
    getInternshipsByTag(tagInputs).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults((prevResults) => [...prevResults, ...results]);
      console.log(results);
    });
  };

  const onApply = () => {
    showModal();
  };

  return (
    <section className="h-screen bg-gray-100">
      <Navbar />
      <div className={styles.search}>
        <TextInput
          onChange={(input) => setTextInput(input)}
          input={textInput}
        />
        <TagInput updateTags={(tags) => setTagInputs(tags)} tags={tagInputs} />
        <SearchButton onSearch={searchHandler} />
      </div>
      <section className="grid grid-cols-3">
        <div className="col-span-2">
          <Box
            sx={{
              marginLeft: 2,
              marginTop: 2,
            }}
          >
            {sampleCards.map((card, index) => (
              <div key={index}>
                <ICard
                  title={card.title}
                  img={card.img}
                  date={card.date}
                  type={card.type}
                  city={card.city}
                  active={index % 2 === 0 ? true : false}
                />
                <br />
              </div>
            ))}
          </Box>
        </div>
        <div className="col-span-1">
          <InternshipDetails
            imageUrl={dummyImageUrl}
            title={dummyTitle}
            company={dummyCompany}
            description={dummyDescription}
            location={dummyLocation}
            timeAgo={dummyTimeAgo}
            status={dummyStatus}
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
