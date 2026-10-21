package dev.luann.userservice.utils;

public class Format
{
        public static String date(String date) {
            if (date == null || date.length() < 10) {
                return null;
            }

            String year = date.substring(0, 4);
            String month = date.substring(5, 7);
            String day = date.substring(8, 10);

            return day + "/" + month + "/" + year;
        }

        public static String cpf(String cpf) {
            if (cpf == null || cpf.length() < 11) {
                return null;
            }

            String firstPart = cpf.substring(0, 3);
            String secondPart = cpf.substring(3, 6);
            String thirdPart = cpf.substring(6, 9);
            String lastPart = cpf.substring(9, 11);

            return firstPart + "." + secondPart + "." + thirdPart + "-" + lastPart;
        }

        public static String cep(String cep) {
            if (cep == null || cep.length() < 8) {
                return null;
            }

            String firstPart = cep.substring(0, 5);
            String lastPart = cep.substring(5, 8);

            return firstPart + "-" + lastPart;
        }

        public static String phone(String phone) {
            if (phone == null) {
                return null;
            }

            if (phone.length() == 10) {
                String areaCode = phone.substring(0, 2);
                String firstPart = phone.substring(2, 6);
                String lastPart = phone.substring(6, 10);

                return "(" + areaCode + ") " + firstPart + "-" + lastPart;
            }

            if (phone.length() == 11) {
                String areaCode = phone.substring(0, 2);
                String firstPart = phone.substring(2, 7);
                String lastPart = phone.substring(7, 11);

                return "(" + areaCode + ") " + firstPart + "-" + lastPart;
            }

            return null;
    }
}
