import pricesRepository from "@/repository/repositories/pricesRepository";
import linksRepository from "@/repository/repositories/linksRepository";
import workersRepository from "@/repository/repositories/workersRepository";
import homePageRepository from "@/repository/repositories/homePageRepository";
import authRepository from "@/repository/repositories/authRepository";
import aboutUsRepository from "@/repository/repositories/aboutUsRepository";
import contactInformationRepository from "@/repository/repositories/contactInformationRepository";
import notificationsRepository from "@/repository/repositories/notificationsRepository";
import regulationsRepository from "@/repository/repositories/regulationsRepository";
import emailRepository from "@/repository/repositories/emailRepository";

const repositories = {
  prices: pricesRepository,
  links: linksRepository,
  workers: workersRepository,
  homePage: homePageRepository,
  auth: authRepository,
  aboutUs: aboutUsRepository,
  contactInformation: contactInformationRepository,
  notifications: notificationsRepository,
  regulations: regulationsRepository,
  email: emailRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
