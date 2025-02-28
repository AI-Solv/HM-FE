import Link from "next/link";

export default function BottomNav({
  url,
}: {
  url: string;
}) {
  return (
    <div className="fixed bottom-0 w-full sm:max-w-[460px] h-[95px] bg-white shadow-[0px_-2px_4px_0px_rgba(177,168,230,0.38)]">
      <nav className="flex justify-center items-center gap-16">
        <Link href={"/home"}>
          <div data-svg-wrapper>
            <svg
              width="60"
              height="60"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.8281C12 22.2365 12.2619 21.6752 12.7154 21.2952L23.7154 12.0766C24.4586 11.4538 25.5415 11.4538 26.2846 12.0766L37.2846 21.2952C37.7381 21.6752 38 22.2365 38 22.8281V36C38 37.1046 37.1046 38 36 38H14C12.8954 38 12 37.1046 12 36V22.8281Z"
                fill={
                  url === "home" ? "#D0C8FF" : "#D5D5D5"
                }
              />
              <path
                d="M19.7037 32.2142C19.7037 31.6817 20.1355 31.2499 20.668 31.2499H29.332C29.8646 31.2499 30.2963 31.6817 30.2963 32.2142C30.2963 32.7468 29.8646 33.1785 29.332 33.1785H20.668C20.1355 33.1785 19.7037 32.7468 19.7037 32.2142Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
        <Link href={"/problem/create"}>
          <div
            className={`flex justify-center items-center w-[70px] h-[70px] bg-${
              url === "create" ? "none" : "[#b1a8e6]"
            } rounded-full`}
          >
            <div className="w-[26px] h-[26px] relative">
              <div
                data-svg-wrapper
                className="left-0 top-0 absolute"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8946 1.35469L0.58094 18.7876C0.208833 19.1623 0 19.6689 0 20.197V24C0 25.1046 0.895429 26 2 26H5.40795C5.94053 26 6.45111 25.7876 6.82653 25.4098L24.5227 7.60414C25.3272 6.79466 25.2923 5.47718 24.4461 4.71139L20.6556 1.28113C19.8634 0.564164 18.6475 0.596559 17.8946 1.35469Z"
                    fill={
                      url === "create"
                        ? "#d0c8ff"
                        : "#ffffff"
                    }
                  />
                </svg>
              </div>
              <div
                className={`w-[15.02px] h-0.5 left-[8.65px] top-[15.39px] absolute origin-top-left rotate-[-44.27deg] bg-${
                  url === "create"
                    ? "[#ffffff]"
                    : "[#b1a8e6]"
                } rounded-[1px]`}
              />
            </div>
          </div>
        </Link>
        <Link href={"/problem"}>
          <div className="w-[60px] h-[60px] px-[13px] pt-[11px] pb-3 justify-center items-center overflow-hidden">
            <div className="w-6 h-[27px] relative">
              <div
                data-svg-wrapper
                className="left-0 top-0 absolute"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 0C1.34315 0 0 1.34315 0 3V24C0 25.6569 1.34315 27 3 27H18.4374L24 21.111V3C24 1.34315 22.6569 0 21 0H3Z"
                    fill={
                      url === "problem"
                        ? "#D0C8FF"
                        : "#D5D5D5"
                    }
                  />
                </svg>
              </div>
              <div className="w-[11.48px] h-0.5 left-[5.13px] top-[6px] absolute bg-white rounded-[2px]" />
              <div className="w-[15.65px] h-0.5 left-[5.13px] top-[11px] absolute bg-white rounded-[2px]" />
              <div className="w-[6.26px] h-0.5 left-[5.13px] top-[16px] absolute bg-white rounded-[2px]" />
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
}
