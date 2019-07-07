FROM python:3-alpine
RUN pip3 install flask
COPY app app
CMD [ "python", "app/main.py" ]
