import pricesRepository from "@/repository/repositories/pricesRepository";
import linksRepository from "@/repository/repositories/linksRepository";
import workersRepository from "@/repository/repositories/workersRepository";
import homePageRepository from "@/repository/repositories/homePageRepository";
import authRepository from "@/repository/repositories/authRepository";
import aboutUsRepository from "@/repository/repositories/aboutUsRepository";
import contactInformationRepository from "@/repository/repositories/contactInformationRepository";

const repositories = {
  prices: pricesRepository,
  links: linksRepository,
  workers: workersRepository,
  homePage: homePageRepository,
  auth: authRepository,
  aboutUs: aboutUsRepository,
  contactInformation: contactInformationRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
