import polaroid from "./assets/image/Polaroid.png";
import background from "./assets/video/background.mp4";
import couple from "./assets/vector/couple.png";
import ring from "./assets/vector/ring.png";
import { useEffect, useState } from "react";

function App() {
    const [tamu, setTamu] = useState<string | null>(null);
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get("to");
        setTamu(name);
    }, []);
    return (
        <>
            <section className="h-auto min-h-screen top-0 flex flex-col items-center justify-center">
                <video src={background} autoPlay muted className="object-cover h-full w-screen absolute"></video>
                <div className="flex flex-col items-center gap-8 text-pretty">
                    <span className="relative uppercase text-xl">Undangan Pernikahan</span>
                    <p className="script relative text-center text-7xl md:text-8xl xl:text-9xl">
                        Putri <br /> <span className="font-thin">&</span> <br /> Ivan
                    </p>
                </div>
                <div className="penerima bg-white relative p-12 text-center rounded-md border ">
                    <p>
                        Kepada Yth. <br /> Bapak/Ibu/Saudara/i
                    </p>
                    <p className="font-semibold sm:text-xl text-lg capitalize mt-4">{tamu || "Tamu Undangan"}</p>
                </div>
                <button className="bg-black h-auto w-auto text-white p-2 rounded-3xl gap-1 text-center justify-center align-middle animate-bounce bottom-5 absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </button>
            </section>
            <section className="detail flex flex-col sm:flex-row items-center gap-8 p-5 w-full h-full relative">
                <div className="flex flex-col text-center w-full sm:w-1/2 gap-6 basis-2/3">
                    <p className="font-semibold mt-4">Dengan rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada Pesta Pemberkatan Pernikahan putri kami.</p>
                    <h3 className="text-2xl font-bold mt-8">Putri Andriani Pane</h3>
                    <span className="text-sm font-thin">
                        Putri dari Bapak St. Eli Tohonan Tua Pane, M.Pd. / Elrada Sijabat <br /> & Putri Kandung dari Bapak Antoni Pane / Sri Heriani
                    </span>
                    <p className="text-3xl font-semibold">&</p>
                    <h3 className="text-2xl font-bold">Ivan Firman Sthevanus Hutauruk, S.T.</h3>
                    <span className="text-sm font-thin">Putra dari Bapak Darwin Hutauruk, S.Sos & Ibu Magdalena Tambunan, SP</span>
                    <p className="font-semibold text-xl">
                        Kamis, 24 Oktober 2024 <br /> 10.00 WIB s/d Selesai
                    </p>
                    <p>
                        Gereja GKPI Medan Kota Resort Medan Barat <br />
                        Jalan Sriwijaya No. 9 Medan
                    </p>
                </div>
                <div className="w-fit sm:w-1/2 flex justify-center basis-1/3">
                    <img src={polaroid} alt="" className="max-w-full h-auto" />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-4 p-5">
                <div className="count-wrapper flex flex-col justify-center items-center w-md gap-4 w-full p-20 ">
                    <h2 className="font-semibold">Hitung Mundur</h2>
                    <h1 className="script sm:text-5xl text-4xl text-center">Hari Bahagia Kami</h1>
                    <div className="date-countdown flex gap-2 sm:gap-6 p-2">
                        <div className="day flex flex-col items-center justify-center bg-pink-500 p-5 rounded-lg text-white  w-[80px]">
                            <span id="date" className="font-semibold"></span>
                            <span>Hari</span>
                        </div>
                        <div className="day flex flex-col items-center justify-center bg-pink-500 p-5 rounded-lg text-white  w-[80px]">
                            <span id="hours" className="font-semibold"></span>
                            <span>Jam</span>
                        </div>
                        <div className="day flex flex-col items-center justify-center bg-pink-500 p-5 rounded-lg text-white  w-[80px]">
                            <span id="minutes" className="font-semibold"></span>
                            <span>Menit</span>
                        </div>
                        <div className="day flex flex-col items-center justify-center bg-pink-500 p-5 rounded-lg text-white  w-[80px]">
                            <span id="seconds" className="font-semibold"></span>
                            <span>Detik</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 w-full">
                <div className="text-center flex flex-col justify-center items-center gap-4 p-10 border">
                    <img src={ring} alt="" width={370} />
                    <h1 className="text-5xl script">Resepsi Pernikahan</h1>
                    <p className="font-semibold text-xl">
                        Kamis, 24 Oktober 2024 <br /> 10.00 WIB s/d Selesai
                    </p>
                    <p>
                        Gereja GKPI Medan Kota Resort Medan Barat <br />
                        Jalan Sriwijaya No. 9 Medan
                    </p>
                    <button className="px-4 py-3 bg-black text-white rounded-full flex flex-row gap-2 h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <a href="https://maps.app.goo.gl/yUWmY5WJKzdAqK9B7" target="_blank">
                            Buka Maps{" "}
                        </a>
                    </button>
                </div>
                <div className="text-center flex flex-col justify-center items-center w-md gap-4 p-10 border">
                    <img src={couple} alt="" width={370} />
                    <h1 className="text-5xl script">Adat</h1>
                    <p className="font-semibold text-xl">
                        Kamis, 24 Oktober 2024 <br /> 11.00 WIB s/d Selesai
                    </p>
                    <p>
                        Gedung Serba Guna "GKPI MEDAN KOTA" <br />
                        Jalan Sriwijaya No. 9 Medan
                    </p>
                    <button className="px-4 py-3 bg-black text-white rounded-full flex flex-row gap-2 h-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <a href="https://maps.app.goo.gl/Y8v1dFgFNZ39SE6G6" target="_blank">
                            Buka Maps{" "}
                        </a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default App;
