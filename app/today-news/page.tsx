"use client";

import { useEffect, useState } from "react";
import TodayNewsDescription from "./components/today-news-description";
import TodayNewsList from "./components/today-news-list";
import TodayNewsMenu from "./components/today-news-menu";
import useGetTodayIssue from "./hooks/use-get-today-issue";
import { useAtom } from "jotai";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import Spinner from "@/components/spinner";
import NotExist from "@/components/not-exist";

export type TSelectedMenu = "news" | "video";

export default function TodayNewsPage() {
  const [selectedMenu, setSelectedMenu] = useState<TSelectedMenu>("news");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetTodayIssue(selectedMenu);

  const handleClickTab = (type: TSelectedMenu) => {
    setSelectedMenu(type);
  };

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <div className="flex min-h-[calc(100vh-164px)] items-center">
        <NotExist text="에러가 발생하였습니다. 다시 조회해주세요." />;
      </div>
    );

  if (!data || !data.pages)
    return (
      <div className="flex min-h-[calc(100vh-164px)] items-center">
        <NotExist text="등록된 뉴스가 없습니다." />
      </div>
    );

  const issues = data.pages.flatMap((page) => {
    if (!page.data) return [];
    return page.data.dataList;
  });
  const isExist = issues.length !== 0;

  const handleClickMoreButton = () => {
    fetchNextPage();
  };

  return (
    <>
      <TodayNewsDescription />
      <TodayNewsMenu selectedMenu={selectedMenu} onClick={handleClickTab} />
      <TodayNewsList
        todayIssueList={issues}
        isExist={isExist}
        hasNextPage={hasNextPage}
        handleClickMoreButton={handleClickMoreButton}
      />
    </>
  );
}
