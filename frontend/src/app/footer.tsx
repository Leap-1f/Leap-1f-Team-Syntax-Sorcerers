import * as React from "react";

interface EmailInputProps {
    placeholder: string;
    buttonText: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder, buttonText }) => {
    return (
        <form className="flex flex-row gap-5 justify-between pl-6 mt-8 bg-white rounded-xl w-[377px] max-md:px-5 max-md:max-w-full">
            <label htmlFor="emailInput" className="sr-only">
                {placeholder}
            </label>
            <input
                type="email"
                id="emailInput"
                placeholder={placeholder}
                aria-label={placeholder}
                className="my-auto text-slate-400"
            />
            <button
                type="submit"
                className="box-border relative shrink-0 px-6 py-4 my-auto ml-auto text-center bg-pink-500 rounded appearance-none cursor-pointer text-[white] w-[135px] max-sm:pr-6"
            >
                {buttonText}
            </button>
        </form>
    );
};

interface NavLinkProps {
    text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text }) => {
    return (
        <button className="box-border relative shrink-0 mt-6 mr-auto text-center rounded appearance-none cursor-pointer text-slate-400">
            {text}
        </button>
    );
};

interface NavSectionProps {
    title: string;
    links: string[];
}

const NavSection: React.FC<NavSectionProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col text-base text-slate-400 max-md:mt-10">
            <h2 className="text-2xl font-extrabold text-black">{title}</h2>
            {links.map((link, index) => (
                <NavLink key={index} text={link} />
            ))}
        </div>
    );
};

function Footer() {
    const categories = [
        "Хувцас",
        "Камер, хэрэгсэл",
        "Ухаалаг утас, таблет",
        "Чихэвч",
        "Гэр ахуйн бараа",
    ];

    const otherLinks = [
        "Бидний тухай",
        "Холбоо барих",
        "Түгээмэл асуулт хариулт",
    ];

    return (
        <footer className="flex justify-center items-center px-16 py-20 bg-indigo-50 max-md:px-5">
            <div className="mt-5 max-w-full w-[1128px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-1.5 text-base max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-4xl font-extrabold text-black max-md:max-w-full">
                                eCommerce
                            </h1>
                            <EmailInput
                                placeholder="Имэйл хаяг"
                                buttonText="Бүртгүүлэх"
                            />
                            <div className="mt-8 text-slate-400 max-md:max-w-full">
                                Хаяг
                            </div>
                            <address className="mt-4 text-slate-400 max-md:max-w-full">
                                Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг,
                                Улаанбаатар хот, <br /> Гурван гол - 401 тоот
                            </address>
                        </div>
                    </div>
                    <nav className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                        <NavSection title="Ангилал" links={categories} />
                    </nav>
                    <nav className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                        <NavSection title="Бусад" links={otherLinks} />
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
