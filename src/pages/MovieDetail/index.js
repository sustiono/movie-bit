import { useLocation } from "react-router-dom";
import { NotFound } from "../../components";

const MovieDetail = () => {
  const location = useLocation();
  if (!location.state) return <NotFound />;

  const { movie } = location.state;
  const imgSrc = movie.Poster.includes("http")
    ? movie.Poster
    : "https://via.placeholder.com/300x420.png";

  return (
    <div className='flex flex-col md:flex-row h-full px-5'>
      <div className='flex h-full md:mr-5 w-full md:w-2/5 justify-center'>
        <img src={imgSrc} alt={movie.Title} />
      </div>
      <div className='flex flex-col w-3/5 sm:w-full'>
        <p className='text-2xl text-green-500'>{movie.Title}</p>
        <div className='flex'>
          <div className='flex w-20 font-semibold'>Type</div>
          <div className='flex  '>: {movie.Type}</div>
        </div>
        <div className='flex'>
          <div className='flex w-20 font-semibold'>Year</div>
          <div className='flex  '>: {movie.Year}</div>
        </div>
        <div className='flex'>
          <div className='flex w-20 font-semibold'>imdbID</div>
          <div className='flex  '>: {movie.imdbID}</div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='flex w-20 font-semibold'>Synopsis</div>
            <div className='flex'>:</div>
          </div>
          <div className='flex flex-col w-full'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              nisi. Saepe similique est deleniti magni itaque? Hic suscipit
              officia repellendus delectus, harum nihil cum modi consequatur
              maxime nesciunt blanditiis asperiores.
            </p>
            <p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                dolor explicabo, facere maiores numquam deserunt cupiditate
                veniam inventore illum illo laborum accusamus nostrum asperiores
                ex? In nobis dolor itaque sed?
              </span>
              <span>
                Doloremque modi eveniet at earum adipisci soluta nobis.
                Quibusdam praesentium hic quo? Dignissimos inventore blanditiis
                accusamus rerum eveniet sapiente consectetur facere eum neque,
                saepe qui deserunt nesciunt enim deleniti reprehenderit!
              </span>
              <span>
                Repellendus consectetur beatae quas quod at iusto atque
                distinctio dolores quos facere explicabo nostrum eum, modi sed
                incidunt, a dolorem. Ipsa, vitae eius aut explicabo quam quo.
                Quia, quasi tenetur.
              </span>
              <span>
                Debitis dicta dolorem nobis omnis provident doloribus alias
                labore cum laborum deserunt tempora quod repellat maiores
                assumenda magni velit nemo consectetur, ea cupiditate. Unde
                deserunt impedit expedita vero, delectus deleniti.
              </span>
              <span>
                Recusandae, harum a quidem quae ullam fugit dolorum beatae quia
                sint iusto et minima architecto explicabo quas distinctio
                sapiente aliquam qui? Ullam saepe assumenda maiores distinctio
                dolore quo nulla in.
              </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nam modi. Corrupti non voluptatem saepe enim minus
              dolorem nostrum labore dolorum quod vel magni, rerum vero
              assumenda ad consectetur repudiandae eius aliquid iusto atque
              sapiente harum hic. Delectus ea reiciendis quisquam. Doloremque
              nulla natus sunt at quam delectus enim eius iste cumque
              asperiores, adipisci inventore quidem, provident ex autem
              molestiae quae perspiciatis. Commodi error quisquam, minima
              repellat laudantium, dolorum iusto distinctio autem minus quia
              quasi. Excepturi minima exercitationem aspernatur quisquam. Sequi
              provident ducimus voluptate vero enim quo culpa magnam molestiae,
              quas laboriosam? Et, eaque tempora reiciendis inventore eveniet
              modi quas?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              corrupti veniam alias nulla velit quam unde minus. Illum minima,
              dolore sunt rerum et quo saepe dolor numquam nostrum magnam aut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              doloribus sequi a autem voluptatem animi, itaque corporis sunt
              eligendi voluptas, accusantium laborum, dolor unde eos repellat
              dolores mollitia ad maxime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
