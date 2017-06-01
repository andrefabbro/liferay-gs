#!/bin/sh

./gradlew clean deploy
cp bundles/osgi/modules/com.rafoli.liferay.bundle.angular.jar ../deploy
cp bundles/osgi/modules/com.rafoli.liferay.bundle.angular.todo.web.jar ../deploy
cp bundles/osgi/modules/com.rafoli.liferay.bundle.angular.example.multiple.views.web.jar ../deploy
cp bundles/osgi/modules/gs-theme.war ../deploy
