import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  TextEditingController nameController = TextEditingController();
  bool isNotValid = false;

  void registerUser() async {
    if (nameController.text.isNotEmpty) {
      var dataBody = {
        "name": nameController.text,
      };
      var response = await http.post(
        Uri.parse('http://localhost:4300/regestration'),
        body: jsonEncode(dataBody),
        headers: {"Content-Type": "application/json"},
      );
    } else {
      setState(() {
        isNotValid = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            TextFormField(
              controller: nameController,
              decoration: InputDecoration(
                errorText: isNotValid ? "Enter Your Name" : null,
                errorStyle: TextStyle(color: Colors.red),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10.0),
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            ElevatedButton(
              onPressed: () {
                registerUser();
                setState(() {});
              },
              child: Text("send data"),
            ),
          ],
        ),
      ),
    );
  }
}
