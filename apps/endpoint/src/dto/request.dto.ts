import { IsEmail, IsNotEmpty, IsString} from "@nestjs/class-validator";

export class SendRequest{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}