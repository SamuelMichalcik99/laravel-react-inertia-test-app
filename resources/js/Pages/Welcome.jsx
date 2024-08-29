import HeaderNavbar from "@/Components/HeaderNavbar";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({auth, pictures, menu_items, buttons, text_contents, gradients,}) {
    return (
        <>
            <Head title="Test APP" />
            <div
                className="app-wrapper w-full min-h-screen flex flex-col items-center justify-center p-7 font-medium text-lg text-text
                    m-mobile:px-5"
                style={{
                    backgroundImage: `linear-gradient(to bottom, ${gradients?.[0]?.color_1}, ${gradients?.[0]?.color_2})`,
                }}
            >
                <div className="template-wrapper w-full max-w-[1440px] min-h-[899px] tablet:min-h-[830px] l-mobile:min-h-[750px] m-mobile:min-h-[600px] relative flex flex-col items-start rounded-[30px] overflow-hidden bg-gradient-to-b from-[#FFFDF4] to-[#FFFCEB] shadow-[-15px_12px_56px_0_rgba(0,0,0,0.12)]">
                    <header className="w-5/6 max-w-[50%] h-[26px] absolute top-[55px] left-[5%] gap-x-10 flex justify-between self-start laptop:max-w-[55%] tablet:gap-x-20 l-mobile:left-[10%] s-mobile:left-7 l-mobile:max-w-[90%] s-mobile:gap-x-5">
                        {pictures["logo"]?.image_path && (
                            <img
                                id="logo"
                                className="max-h-[26px] object-contain"
                                src={pictures["logo"].image_path}
                                alt={pictures["logo"].description}
                            />
                        )}
                        <HeaderNavbar menu_items={menu_items} />
                    </header>

                    <div className="w-3/6 max-w-[447px] flex flex-col justify-start items-start gap-y-6 mt-[211px] ml-[10%] laptop:ml-[5%] l-mobile:mt-36 l-mobile:ml-[10%] l-mobile:w-4/6 l-mobile:max-w-none m-mobile:w-5/6 s-mobile:ml-7 s-mobile:mt-32">
                        {text_contents["title"]?.description && (
                            <h1
                                id="main-title"
                                className="font-bold text-[56px]/[72px] bg-clip-text text-transparent tablet:text-4xl m-mobile:text-3xl s-mobile:text-2xl"
                            >
                                {text_contents["title"].description}
                            </h1>
                        )}
                        {text_contents["content"]?.description && (
                            <p className="text-xl/[34px] l-mobile:text-lg m-mobile:text-base s-mobile:text-sm">
                                {text_contents["content"].description}
                            </p>
                        )}
                    </div>

                    <div className="w-3/6 max-w-[447px] flex justify-start items-center gap-x-5 ml-[10%] font-semibold text-2xl mt-7 tablet:w-4/6 laptop:ml-[5%] l-mobile:w-4/6  l-mobile:max-w-none l-mobile:ml-[10%] l-mobile:flex-col l-mobile:items-start l-mobile:gap-y-5 l-mobile:text-lg s-mobile:ml-7">
                        {buttons["left-btn"]?.description && (
                            <a
                                href={buttons["left-btn"].href}
                                id="left-btn"
                                className="w-2/4 h-[69px] flex justify-center items-center px-[36px] py-[17px] rounded-[18px] font-medium capitalize text-white l-mobile:h-14 m-mobile:text-base m-mobile:px-5 m-mobile:py-3 l-mobile:w-3/4 s-mobile:w-full"
                            >
                                <span className="w-full flex justify-center">
                                    {buttons["left-btn"].description}
                                </span>
                            </a>
                        )}
                        {buttons["right-btn"]?.description && (
                            <a
                                href={buttons["right-btn"].href}
                                id="right-btn"
                                className="w-2/4 h-[69px] flex justify-center items-center gap-x-3 capitalize l-mobile:h-14 m-mobile:text-base l-mobile:w-3/4 s-mobile:w-full"
                            >
                                {pictures["play-icon"]?.image_path && (
                                <img
                                    id="play-icon"
                                    className="w-8 h-8 l-mobile:w-5 l-mobile:h-5"
                                    src={pictures["play-icon"].image_path}
                                    alt={pictures["play-icon"].description}
                                />
                                )}
                                <span
                                    id="right-btn-text"
                                    className="bg-clip-text text-transparent font-semibold text-2xl l-mobile:text-lg"
                                >
                                    {buttons["right-btn"].description}
                                </span>
                            </a>
                        )}
                    </div>

                    {/* Conditional rendering for each image */}
                    {pictures["left-bg"]?.image_path && (
                        <img
                            id="left-bg"
                            className="absolute bottom-[0px] left-[0px] rounded-bl-[30px]"
                            src={pictures["left-bg"].image_path}
                            alt={pictures["left-bg"].description}
                        />
                    )}
                    {pictures["right-bg"]?.image_path && (
                        <img
                            id="right-bg"
                            className="absolute top-[0px] left-[52%] rounded-tr-[30px] laptop:left-[55%] tablet:left-[65%] l-mobile:hidden"
                            src={pictures["right-bg"].image_path}
                            alt={pictures["right-bg"].description}
                        />
                    )}
                    {pictures["main-img"]?.image_path && (
                        <img
                            id="main-img"
                            className="absolute top-[154px] right-[0px] w-[52%] laptop:w-[45%] laptop:top-[250px] tablet:w-[40%] l-mobile:hidden"
                            src={pictures["main-img"].image_path}
                            alt={pictures["main-img"].description}
                        />
                    )}
                    {pictures["bottom-img"]?.image_path && (
                        <img
                            id="bottom-img"
                            className="absolute top-[570px] left-[910px] w-[419px] laptop:hidden"
                            src={pictures["bottom-img"].image_path}
                            alt={pictures["bottom-img"].description }
                        />
                    )}
                    {pictures["top-img-1"]?.image_path && (
                        <img
                            id="top-img-1"
                            className="absolute top-[57px] right-[25%] laptop:top-[170px] tablet:top-[120px] tablet:right-[10%] l-mobile:hidden"
                            src={pictures["top-img-1"].image_path}
                            alt={pictures["top-img-1"].description}
                        />
                    )}
                    {pictures["top-img-2"]?.image_path && (
                        <img
                            id="top-img-2"
                            className="absolute top-[38px] right-[50px] laptop:right-10 tablet:hidden"
                            src={pictures["top-img-2"].image_path}
                            alt={pictures["top-img-2"].description
                            }
                        />
                    )}
                    {pictures["additional-img"]?.image_path && (
                        <img
                            id="additional-img"
                            className="absolute top-[290px] left-[45%] desktop:hidden"
                            src={pictures["additional-img"].image_path}
                            alt={pictures["additional-img"].description
                            }
                        />
                    )}
                    {pictures["left-img"]?.image_path && (
                        <img
                            id="left-img"
                            className="absolute top-[212px] left-[0px] laptop:hidden tablet:block tablet:top-auto tablet:left-auto tablet:right-0 tablet:bottom-14 tablet:-scale-x-100 l-mobile:bottom-36 s-mobile:hidden"
                            src={pictures["left-img"].image_path}
                            alt={pictures["left-img"].description
                            }
                        />
                    )}
                </div>

                <footer className="w-full max-w-[1440px] flex justify-between py-7 l-mobile:items-start l-mobile:py-4">
                    {auth.user ? (
                        <Link
                            href={route("admin.index")}
                            className="px-2 py-1 font-medium text-2xl l-mobile:text-sm"
                        >
                            Admin Panel
                        </Link>
                    ) : (
                        <div className="p-0 m-0 flex justify-center items-center">
                            <Link
                                href={route("login")}
                                className="px-2 py-1 font-medium text-2xl l-mobile:text-xs"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route("register")}
                                className="px-2 py-1 font-medium text-2xl l-mobile:text-xs"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                    <a
                        href="https://www.nickelfox.com/"
                        className="font-medium text-2xl l-mobile:text-xs px-2 py-1"
                    >
                        www.nickelfox.com
                    </a>
                </footer>
            </div>
        </>
    );
}
