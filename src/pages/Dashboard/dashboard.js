import React, { useEffect, useState, useContext } from "react";
import Layout from "../../components/layout";
import Context from "../../store/context";
import axios from "axios";
import { MainDiv } from "../../components/MyStyledComonents";
import "./dashboard.css";
import { AnchorButton } from "@blueprintjs/core";
import Sidebar from "react-sidebar";

function Dashboard() {
  const { state, setState } = useContext(Context);

  return (
    <Layout>
      <>
        <main className="dashboard-main">
          <section className="main-app-section">
            <MainDiv>
              <h1>Hi {state.first_name}, You have conducted N inspections today</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta ea in porro voluptatem. Commodi
                culpa cupiditate deserunt dolores eligendi eum expedita incidunt inventore itaque iusto laboriosam
                nesciunt, odit officia optio placeat, provident quibusdam quo repellendus soluta suscipit totam vitae
                voluptatum. Ad adipisci aperiam aut consequuntur cum expedita harum ipsum iusto laudantium molestias
                mollitia nihil odio omnis possimus reiciendis, similique, ullam! A accusamus animi assumenda atque
                debitis distinctio dolor doloremque dolorum est excepturi, facilis hic incidunt ipsum iusto libero
                maxime, molestias natus quae reiciendis sapiente, tenetur velit voluptas! Cupiditate debitis ducimus
                necessitatibus sint unde. Assumenda at dolor fugiat numquam ratione similique? Adipisci aliquam cumque
                eum provident soluta! Ab accusamus animi consequatur cum dolores, eius eos harum illum perferendis
                quisquam. Adipisci nemo pariatur praesentium quaerat qui saepe! Excepturi illo ipsa laboriosam
                laudantium natus necessitatibus nesciunt sequi. At cumque enim ex illum iure, laboriosam maxime minima
                nobis non odit perferendis placeat quaerat sequi. Ad aliquid atque blanditiis consequatur debitis
                doloremque ea est eveniet excepturi expedita explicabo fugit iusto laborum magni, maxime mollitia
                necessitatibus nulla odio optio porro, quasi quis repellat tempora, unde voluptatibus. Ab accusantium
                alias animi blanditiis cum cumque dolorem eveniet expedita facere fugit id impedit itaque maxime
                molestiae necessitatibus nulla officia pariatur quas, quisquam quo sint, sunt suscipit unde, vitae
                voluptate! Ab animi, aperiam commodi, eos et expedita illum iure labore perferendis quae sapiente sint
                totam, veritatis. Ad alias amet autem consequuntur dignissimos dolor dolore ducimus error, et ex facilis
                fuga fugiat hic impedit itaque iure labore modi, neque optio placeat praesentium quam quas qui
                reprehenderit saepe sequi vel voluptatum. Ad aperiam cupiditate distinctio, ducimus eius, ex explicabo
                facilis iure, magnam magni molestiae mollitia non nulla perspiciatis provident quidem quis quisquam
                ratione sint sunt? Asperiores beatae blanditiis consequatur cupiditate dicta, distinctio dolor est et ex
                fugiat illo in ipsam itaque laboriosam magnam magni minus molestias neque, nihil nostrum obcaecati
                officia officiis provident quae qui quis, quod recusandae reiciendis sunt voluptatem? Asperiores
                assumenda at autem commodi dignissimos dolore doloremque est, ex excepturi expedita facilis fuga ipsum
                iste itaque iure maiores maxime minima non nostrum officiis omnis placeat quae, qui quidem recusandae
                similique soluta tempora ullam velit voluptatum? Ab amet atque blanditiis cum delectus neque placeat
                reiciendis sint. Amet asperiores, aspernatur, commodi ducimus eius eveniet ex in incidunt ipsa laborum
                porro quas quisquam reiciendis. Ab aliquam beatae cumque doloremque eaque earum eligendi eos fugiat iste
                magnam, minima modi necessitatibus nemo officia perspiciatis quasi quibusdam quo reprehenderit
                repudiandae saepe. Assumenda aut deleniti dignissimos facilis laborum maxime obcaecati officia?
                Accusamus ad adipisci aliquam at aut dignissimos ducimus eaque in laborum libero modi, praesentium quasi
                qui, quibusdam veniam veritatis voluptatibus. Ad assumenda dolorem doloremque in magni quaerat quibusdam
                ratione rem vel. Accusantium aperiam assumenda dicta distinctio dolores ducimus ipsa ipsum modi neque,
                nesciunt officia officiis pariatur quam quis quo, sequi soluta totam vitae. Doloremque labore maxime
                mollitia odit officiis pariatur similique unde. Aperiam blanditiis consectetur eius esse, illum
                laboriosam, magnam necessitatibus nihil non officia qui quisquam recusandae rem soluta suscipit totam
                vel voluptatum. At minus necessitatibus placeat quaerat quidem quos repellendus saepe. Animi dolor
                facilis fuga incidunt qui quisquam quod saepe voluptatem. A autem blanditiis consequatur culpa
                cupiditate debitis ducimus ea facere facilis harum iste iure iusto laborum libero magni maxime minus
                necessitatibus non pariatur, perferendis placeat possimus praesentium provident quaerat quas quia
                quibusdam quisquam quo repellendus sed sint soluta tenetur totam ut vel veritatis voluptas. Animi et
                maiores perferendis rerum sint ut veritatis vero. Accusantium ipsa ipsam, pariatur placeat quisquam rem
                voluptas! Ad alias corporis, deleniti dignissimos, dolorem earum perspiciatis qui, reprehenderit
                sapiente sunt tempora veniam voluptate. Atque aut delectus eos esse hic itaque molestias obcaecati quas,
                quos suscipit. Accusamus ducimus impedit magni porro quis repellendus ut voluptatem voluptatibus,
                voluptatum? Earum fugiat ipsam non omnis praesentium. Assumenda illum molestias odit quasi,
                reprehenderit repudiandae sequi. Accusamus inventore libero praesentium reiciendis. Ab adipisci amet at
                autem beatae corporis cumque cupiditate, debitis dolorum ea eligendi enim explicabo illum impedit, ipsam
                iste maiores minima necessitatibus nisi nulla numquam odit placeat, praesentium quas quia quidem rem
                repudiandae sequi ullam ut vel voluptas voluptates voluptatum. Atque aut consectetur debitis deleniti
                deserunt dolore esse ex expedita id laborum nihil nobis nulla numquam, quibusdam, repellendus totam vel,
                voluptates. Atque beatae dolore numquam porro quas, quis repudiandae? Doloremque ea eos fuga fugiat,
                labore laboriosam, maiores molestiae nulla officia quidem quo tempore. Consequuntur delectus, dolorem
                doloremque ea enim est hic, illo ipsum obcaecati officiis omnis perspiciatis quam qui quis quod tenetur
                ut voluptas voluptatem. Ab corporis cumque ea hic ipsum iure obcaecati omnis praesentium quo ratione,
                sapiente suscipit! Accusantium blanditiis, consectetur, corporis culpa eaque eligendi error est
                exercitationem facilis hic ipsam iusto magnam modi nemo nostrum omnis quae quaerat qui quidem quod quos,
                ratione saepe sapiente sequi veniam? Ad alias aliquam amet animi aspernatur assumenda autem culpa
                cumque, cupiditate dolor dolore doloremque ea eligendi enim, et eveniet exercitationem explicabo fuga
                harum in laborum minus molestias nemo officia officiis perferendis possimus quibusdam, quis quod ratione
                recusandae repudiandae sapiente sed sequi temporibus vel voluptatibus? Impedit laborum non quia quisquam
                reiciendis sit! Aliquam animi consequuntur dignissimos dolor dolore dolores earum iste minus neque odit
                perferendis sapiente, vitae voluptatum? Ad culpa cupiditate distinctio dolores enim, esse ex ipsa
                laboriosam laborum laudantium magnam nam nisi odio optio perferendis possimus quas quasi quidem quis
                ratione repudiandae sit tempore tenetur vel velit veritatis voluptatibus. Aliquam commodi, dolor eveniet
                explicabo illo libero magni modi ratione repellat repellendus tenetur vel velit voluptatum. Aut eius
                eveniet excepturi exercitationem expedita libero magni, ratione saepe sed similique ullam voluptates.
                Dolore id maiores modi quam sequi velit. A adipisci architecto asperiores aspernatur assumenda
                consectetur doloremque dolorum ex facere iste iure libero magnam molestiae molestias mollitia
                perferendis possimus quos repellat repudiandae, sed temporibus veniam veritatis? Ad alias blanditiis
                dolorem earum enim et impedit laboriosam magnam non obcaecati officiis quaerat quis, quos saepe sit
                temporibus vero voluptatem, voluptatum? Alias aperiam consequuntur eum expedita facilis id incidunt,
                ipsum iste labore magnam magni minima molestiae molestias mollitia nemo non nostrum pariatur quas qui
                rerum similique sit tempora temporibus unde, veniam vitae voluptate voluptates. Adipisci dolores dolorum
                itaque qui, sequi ut? Accusamus aliquam at, cumque dignissimos ducimus ea eius, eum ex fugiat ipsa iure
                quasi sit soluta temporibus, unde vero vitae voluptatem. Ab architecto, ducimus fugit iste odio
                perspiciatis praesentium quaerat quam quas sapiente sequi, sunt tempora, temporibus totam velit. A
                dolorem eveniet exercitationem iure nihil quam quisquam quo ratione sapiente voluptatem. Amet architecto
                aspernatur atque consequatur dolorem ea enim eum fuga illum ipsam iure laborum magni modi, omnis optio
                porro qui quo, repudiandae rerum sint tenetur, ut voluptatum. Architecto consequuntur eius esse id
                minima nostrum, temporibus voluptate voluptatem. Accusantium alias aperiam corporis culpa, cum earum
                eligendi et eum incidunt iusto, minima minus, odio officia omnis optio placeat ratione saepe sequi sint
                sit. Consequuntur corporis itaque labore laudantium nobis optio pariatur ut! Amet aut explicabo,
                obcaecati odit pariatur quod saepe tenetur. Aliquam aperiam aspernatur autem blanditiis consequatur
                consequuntur corporis culpa debitis dicta dolorem doloremque eos est, et excepturi exercitationem facere
                fuga iste iure labore laborum, libero maxime neque nesciunt nihil nobis odio provident qui quibusdam
                quidem quisquam repudiandae rerum ut voluptatibus! Ab amet autem commodi doloribus dolorum ducimus est
                eveniet ex expedita fuga in iusto laudantium magni mollitia necessitatibus, nobis possimus, quae quis
                quo sequi similique unde velit veritatis vero voluptas voluptate voluptates! Amet animi aspernatur
                delectus est exercitationem expedita explicabo, harum libero magnam minus nobis odio praesentium quam
                quisquam quod tempora ullam velit, vero. Beatae consequuntur, delectus dignissimos, exercitationem in
                iure nihil odio quod ratione repellendus repudiandae sapiente sint veniam. Dolores ipsum iure iusto quo
                sequi. Adipisci aperiam aut culpa dignissimos dolorem ea quas quos velit. At corporis distinctio dolor
                dolore est expedita fuga harum hic, minus neque officia, pariatur quam tempora. Animi, autem blanditiis
                debitis dolorem dolorum ipsa iusto laboriosam maxime nesciunt non, numquam odio perferendis perspiciatis
                possimus praesentium quam, rem repellendus tempore! Delectus fuga fugit iusto molestiae possimus sequi,
                voluptatum? Accusamus at aut delectus dolorum fuga nam nesciunt nihil numquam qui soluta. Ab accusantium
                aliquid, animi assumenda consequatur cum dolor dolores exercitationem facere, maiores mollitia nisi odio
                optio sed sint voluptate voluptates. Consequuntur deleniti enim necessitatibus non omnis quisquam
                voluptatum? Dolores eum molestias quam quod! A adipisci amet assumenda atque aut beatae consequuntur,
                delectus eligendi enim eum facere facilis fuga id incidunt ipsum itaque libero maxime nobis, nulla
                officia possimus quia ratione, reprehenderit sequi soluta! Aut cum exercitationem facere magni rem? Ad
                aliquid facilis, minima officia quaerat quasi quidem! Alias aliquid at beatae consectetur consequuntur
                cumque cupiditate delectus deserunt distinctio, dolorum ea eligendi explicabo in incidunt inventore
                magni, maiores odit omnis pariatur porro quasi qui quia quisquam rem repudiandae, sequi similique sit
                suscipit tempora unde? Autem beatae dicta fugiat itaque natus necessitatibus officiis, repellat sapiente
                sint tempora unde vitae! Accusamus, aperiam assumenda dolorem illum laborum laudantium nam nesciunt
                officiis quibusdam reprehenderit sed totam unde! Accusamus commodi, cupiditate deserunt dolores eligendi
                est maiores minus, nisi officiis recusandae sequi sit tempora ut voluptate voluptatibus? Accusamus
                consectetur consequatur consequuntur deleniti deserunt distinctio eum, inventore ipsum molestias nam
                necessitatibus nihil officiis omnis quae quam quia quisquam recusandae sapiente similique sunt tempora
                vel voluptates? Accusantium adipisci aperiam consequatur dignissimos dolores est, facere inventore
                molestiae molestias necessitatibus nesciunt, obcaecati qui quia repellat repudiandae vitae voluptates
                voluptatibus? Adipisci alias consequuntur enim incidunt magni nemo praesentium quos unde vitae. Autem
                commodi consequuntur dignissimos doloremque eos illo, labore laboriosam molestias necessitatibus nobis
                numquam omnis perferendis temporibus, vero vitae! Accusamus amet animi, est in iure mollitia possimus
                velit? Accusamus aliquid deserunt explicabo obcaecati provident! Aliquid aspernatur, at aut cum dolore
                dolorem doloribus iste, magnam nobis non nostrum nulla numquam quaerat quidem suscipit tempora
                temporibus vitae. Cum delectus, ea enim eveniet porro sint ut! Accusantium, alias assumenda deserunt
                dignissimos dolorem dolorum eaque earum ex facilis id illum ipsum laboriosam libero odit quae quo quos
                saepe similique veritatis vitae? Architecto corporis eius et provident quia repudiandae sint vel? Dolor
                eveniet facere neque praesentium quasi repellat voluptatibus. A accusantium amet autem cum dicta esse et
                laboriosam necessitatibus nesciunt, omnis reprehenderit ut vel. Alias assumenda consequatur, deserunt
                dicta esse mollitia similique sunt! Accusantium at consectetur cupiditate dignissimos doloribus,
                dolorum, ea eligendi eos et fugit illum laudantium minus molestias possimus quaerat quasi, quidem sint
                temporibus! Accusamus aspernatur dolore est id in nemo, sunt. Alias commodi deleniti dolorem dolorum
                eligendi, illum, iste itaque magnam, porro provident rerum totam veniam! Alias corporis delectus enim
                eveniet id laudantium libero magni sit veniam. Animi, assumenda at delectus distinctio dolor doloribus
                ex excepturi fuga id labore nam nesciunt pariatur, perferendis placeat praesentium quas quos rerum sit
                suscipit tenetur totam ut voluptatem voluptatum. Adipisci dicta dolore doloremque impedit ipsa placeat
                provident sed voluptate. Assumenda distinctio ex in provident? Minus, ullam, voluptatibus? Cumque eum
                illo iste mollitia nesciunt officiis temporibus unde veniam. Ad atque consequuntur cum delectus,
                deserunt eius illo iure nemo nesciunt nobis pariatur quae quo quos recusandae sunt ullam voluptatibus? A
                accusamus accusantium alias autem cumque cupiditate, debitis distinctio dolor doloremque, ducimus enim
                facere fugiat impedit incidunt magnam magni natus nostrum optio pariatur placeat porro quam quis
                quisquam repudiandae sapiente tempora temporibus tenetur vel veritatis vitae. Amet cumque eligendi ex
                inventore magni repellendus voluptate. Accusamus adipisci consequuntur dolorem excepturi expedita
                facilis, fuga, ipsam iure laudantium libero minus nulla omnis quaerat quam quisquam sint tenetur.
                Blanditiis consectetur ipsam maiores minima perspiciatis! A facilis molestiae reprehenderit repudiandae
                soluta. Ab accusantium, ad autem beatae blanditiis cumque dicta dolor dolorem earum eos expedita
                explicabo inventore labore, molestias mollitia neque nihil officiis optio perspiciatis quibusdam
                recusandae repellat repudiandae rerum sapiente similique, sint soluta suscipit temporibus totam
                voluptatem. Corporis eaque eos, expedita facilis id itaque laborum nobis nulla, quidem quisquam tempora
                temporibus totam unde ut veniam? Ad aliquid amet aperiam at debitis dolorum eos esse eveniet fuga fugiat
                impedit ipsam laudantium magni molestiae, molestias necessitatibus nihil nisi odit quas quia quidem quo
                recusandae suscipit tempora ullam! Ad maiores mollitia possimus soluta vero vitae. Autem cupiditate
                laboriosam laudantium neque nulla quia ut? Explicabo facilis hic totam! Aut commodi distinctio dolore et
                ex in ipsa iste itaque minus nam optio placeat quos, repellat repudiandae saepe tempora ut?
              </p>
            </MainDiv>
          </section>
        </main>
      </>
    </Layout>
  );
}

export default Dashboard;
