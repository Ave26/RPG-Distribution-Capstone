import java.util.Scanner;

public class CreateAccount {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String username, password, confirmPassword, email;

        System.out.println("Create a new account:");
        System.out.print("Enter a username: ");
        username = input.nextLine();

        System.out.print("Enter an email address: ");
        email = input.nextLine();

        System.out.print("Enter a password: ");
        password = input.nextLine();

        System.out.print("Confirm password: ");
        confirmPassword = input.nextLine();

        if (!password.equals(confirmPassword)) {
            System.out.println("Passwords do not match. Please try again.");
            return;
        }

        // save user details to database or file
        System.out.println("Account created successfully.");
    }
}
